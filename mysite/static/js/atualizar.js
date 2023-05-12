function atualizarConteudo() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/', true);

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const novoConteudo = this.responseText;
            const conteudoAtual = document.body.innerHTML;
            if (novoConteudo !== conteudoAtual) {
                document.body.innerHTML = novoConteudo;
            }
        }
    };

    xhr.send();
}

atualizarConteudo();

function realizarConversao() {
  var form = document.querySelector('#form-conversao');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var data = new FormData(form);
    axios.post('/conversao', data)
      .then(function(response) {
        document.querySelector('#conversao').textContent = response.data.valor;
        // Faz outra requisição AJAX para atualizar o valor armazenado em cache
        atualizarValorEmCache();
      })
      .catch(function(error) {
        console.log('Erro na requisição. Status do erro: ' + error.response.status);
      });
  });
}

function atualizarValorEmCache() {
  axios.get('/conversao_valor')
    .then(function(response) {
      console.log(response.data.valor);
    })
    .catch(function(error) {
      console.log('Erro na requisição. Status do erro: ' + error.response.status);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  realizarConversao();
});
