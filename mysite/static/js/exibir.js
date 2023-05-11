document.addEventListener('DOMContentLoaded', function() {
document.getElementById("meuBotao").addEventListener("click", function() {
  fetch('/conversao')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao obter dados');
      }
    })
    .then(function(data) {
      document.getElementById("conversao").innerHTML = data.valor;
    })
    .catch(function(error) {
      console.log(error);
    });
  });
});