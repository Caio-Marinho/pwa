function atualizarConteudo(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/',true);

    xhr.onload = function(){
        if(xhr.status >=200 && xhr.status < 400){
            const novoConteudo = xhr.responseText;
            const conteudoAtual = document.body.innerHTML;
            if(novoConteudo !== conteudoAtual) {
                document.body.innerHTML = novoConteudo;
            }
        }
    };

    xhr.send();
}

setInterval(atualizarConteudo, 5000); // atualizar a cada 10 segundos