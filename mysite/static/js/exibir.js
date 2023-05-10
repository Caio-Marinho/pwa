function exibir() {
  var valor = $('#input_valor').val();

  $.ajax({
    url: '/conversao',
    type: 'POST',
    data: {
      'valor': valor
    },
    success: function(data) {
      if ('resultado' in data) {
        $('#exibir').text('O valor é: ' + data.resultado);
      } else {
        $('#exibir').text(data.erro);
      }
    },
    error: function() {
      alert('Ocorreu um erro ao enviar a solicitação.');
    }
  });
}
