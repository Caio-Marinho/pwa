function atualizarConteudo() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/', true);

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const novoConteudo = this.responseText;
            const conteudoAtual = document.body.innerHTML;
            if (novoConteudo !== conteudoAtual) {
                document.body.innerHTML = novoConteudo;
            }
        }
    };

    xhr.send();
}

atualizarConteudo();

function realizarConversao() {
    $('#form-conversao').submit(function(event) {
    event.preventDefault();
    $.ajax({
    url: '/conversao',
    type: 'POST',
    data: $('#form-conversao').serialize(),
    success: function(response) {
    $('#conversao').text(response.valor);
    // Faz outra requisição AJAX para atualizar o valor armazenado em cache
    atualizarValorEmCache();
    }
    });
    });
    }
    
    function atualizarValorEmCache() {
    $.ajax({
    url: '/conversao_valor',
    type: 'GET',
    success: function(response) {
    console.log(response.valor);
    }
    });
    }
    
    $(document).ready(function() {
    realizarConversao();
    });