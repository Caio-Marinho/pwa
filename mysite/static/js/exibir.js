$('#conversao-form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: '/conversao',
    data: $('#conversao-form').serialize(),
    success: function(response) {
      $('#resultado').text(response.valor);
    },
    error: function() {
      $('#resultado').text('Erro ao converter valor');
    }
  });
});