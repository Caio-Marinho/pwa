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