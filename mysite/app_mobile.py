from flask import Flask, request, render_template, redirect, url_for, flash, get_flashed_messages, session,jsonify
from flask_sslify import SSLify
import requests
import secrets
from cachetools import TTLCache
from concurrent.futures import ThreadPoolExecutor


port = 5000
app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_hex(16)
app.config['TEMPLATES_AUTO_RELOAD'] = True
sslify = SSLify(app)
cache = TTLCache(maxsize=1, ttl=3600) # Cache para armazenar a lista de moedas
executor = ThreadPoolExecutor(max_workers=10) # Executor para executar as requisições para a API de países em paralelo

@app.route('/')
def index():
    nome = cache.get('moedas') # Tenta obter a lista de moedas do cache
    if nome is None:
        url = "https://open.er-api.com/v6/latest/AED"
        response = requests.get(url)
        data = response.json()
        currencies = data["rates"]
        nome = {}
        with executor:
            futures = []
            for currency in currencies:
                url = f'https://restcountries.com/v3.1/currency/{currency}'
                futures.append(executor.submit(requests.get, url))
            for future, currency in zip(futures, currencies):
                response = future.result()
                if response.status_code == 200:
                    data = response.json()
                    nome[data[0]['currencies'][currency]['name']] = currency
        cache['moedas'] = nome # Armazena a lista de moedas no cache
    mensagem = None
    mensagens = get_flashed_messages(with_categories=False)
    if mensagens:
        mensagem = mensagens[0]
    session['mensagem'] = mensagem
    message = session.pop('mensagem', None)
    if mensagem is None:
        return render_template("index.html",  moedas=nome)
    return render_template("index.html", conversao=message, moedas=nome)

@app.route('/conversao', methods=['GET', 'POST'])
def contacao():
    global conversao
    if request.method == 'POST':
        try:
            valor = request.form['valor']
            moeda = request.form['moeda']
            moeda2 = request.form['moeda2']
            url = f'https://open.er-api.com/v6/latest/{moeda}'
            req = requests.get(url)
            dados = req.json()
            cota = dados['rates'][f'{moeda2}']
            contacao = cota
            url2 = f'https://open.er-api.com/v6/latest/{moeda2}'
            req2 = requests.get(url2)
            dados2 = req2.json()
            cota2 = dados2['rates'][f'{moeda}']
            contacao2 = cota2
            if contacao < contacao2:
                conversao = float(valor) / float(contacao2)
            elif contacao > contacao2:
                conversao = float(contacao)*float(valor)
            cache['conversao'] = conversao # Armazena o valor da conversão em cache
            return str(conversao) # Retorna o valor da conversão por meio de uma requisição AJAX
        except:
            return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True, port=port)
