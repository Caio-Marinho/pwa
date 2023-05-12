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
  var data = new FormData(form);
  axios.post('/conversao', data)
    .then(function(response) {
      document.querySelector('#conversao').textContent = response.data.valor;
    })
    .catch(function(error) {
      console.log('Erro na requisição. Status do erro: ' + error.response.status);
    });
  return false;
}