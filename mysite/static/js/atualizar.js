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
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/conversao');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          document.getElementById('#conversao').textContent = response.valor;
          // Faz outra requisição AJAX para atualizar o valor armazenado em cache
          atualizarValorEmCache();
        } else {
          console.log('Erro na requisição. Status do erro: ' + xhr.status);
        }
      };
      xhr.send(new FormData(form));
    });
  }
  
  function atualizarValorEmCache() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/conversao_valor');
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response.valor);
      } else {
        console.log('Erro na requisição. Status do erro: ' + xhr.status);
      }
    };
    xhr.send();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    realizarConversao();
  });
  