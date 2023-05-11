  // Adiciona um listener para o submit do form
  document.getElementById("form-conversao").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do form (submit e refresh da página)
    var form = new FormData(event.target); // Obtém os dados do form
    var xhr = new XMLHttpRequest(); // Cria uma nova requisição AJAX
    xhr.open('POST', '/conversao'); // Configura a requisição para enviar os dados do form para o endpoint '/conversao'
    xhr.onload = function() {
        if (xhr.status === 200) { // Verifica se a requisição foi bem sucedida
            var response = JSON.parse(xhr.responseText); // Converte a resposta para JSON
            document.getElementById("conversao").textContent = response.valor; // Atualiza o elemento HTML com o valor convertido
        } else {
            console.log('Erro ao realizar a requisição.');
        }
    };
    xhr.send(form); // Envia a requisição com os dados do form
});
