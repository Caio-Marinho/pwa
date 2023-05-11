function realizarConversao() {
  fetch('/conversao_valor')
    .then(response => response.json())
    .then(data => {
      const valor = data.valor;
      // Faça algo com o valor retornado
    })
    .catch(error => console.error(error));
}

$('#form-conversao').submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: '/conversao',
    type: 'POST',
    data: $('#form-conversao').serialize(),
    success: function(response) {
      $('#conversao').text(response.valor);
      realizarConversao();
    }
  });
});