function exibir() {
        fetch('/conversao') // faz uma requisição GET para o servidor
          .then(response => response.json()) // converte a resposta para JSON
          .then(data => { // atualiza o valor na página
            var conversao = data.conversao;
            document.getElementById('conversao').innerHTML = conversao;
          })
          .catch(error => console.error(error));
      }
exibir(); // chama a função ao carregar a página
