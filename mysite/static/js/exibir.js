function exibir() {
  $(document).ready(function() {
    $('#btn-consultar').click(function(event) {
        event.preventDefault();
        $.ajax({
            url: '/conversao',
            type: 'POST',
            data: $('#form-conversao').serialize(),
            success: function(response) {
                console.log('oi');
                $('#conversao').html(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
      }
exibir(); // chama a função ao carregar a página
