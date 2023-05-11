$(document).ready(function() {
  $('#form-conversao').submit(function(event) {
      event.preventDefault(); // Previne o comportamento padrão do form (submit e refresh da página)
      var form = $(this).serialize(); // Obtém os dados do form como uma string serializada
      $.ajax({
          url: '/conversao',
          type: 'POST',
          data: form,
          dataType: 'json', // Especifica que o tipo de dados da resposta é JSON
          success: function(response) {
              console.log('oi');
              $('#conversao').text(response.valor); // Atualiza o elemento HTML com o valor convertido
          },
          error: function(error) {
              console.log(error);
          }
      });
  });
});