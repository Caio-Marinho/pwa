function exibir() {
  var valor = $('#input_valor').val();

  $.ajax({
    url: '/conversao',
    type: 'POST',
    data: {
      'valor': valor
    },
    success: function(data) {
      if ('valor' in data) {
        $('#exibir').text('O valor é: ' + data.valor);
      } 
    },
    error: function() {
      alert('Ocorreu um erro ao enviar a solicitação.');
    }
  });
}
