$(document).ready(function() {
  $('#form-conversao').submit(function(event) {
      event.preventDefault();
      $.ajax({
          url: '/conversao',
          type: 'POST',
          data: $('#form-conversao').serialize(),
          success: function(response) {
              $('#conversao').text(response.valor);
              // Faz outra requisição AJAX para atualizar o valor armazenado em cache
              $.ajax({
                  url: '/conversao_valor',
                  type: 'GET',
                  success: function(response) {
                      console.log(response.valor);
                  }
              });
          }
      });
  });
});