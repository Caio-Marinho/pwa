function atualizarConteudo(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/',true);

    xhr.onload = function(){
        if(xhr.status >=200 && xhr.status < 400){
            const novoConteudo = xhr.responseText;
            const conteudoAtual = document.body.innerHTML;
            if(novoConteudo !== conteudoAtual) {
                document.body.innerHTML = novoConteudo;
                atualizarConteudo();
            }
        }
    };

    xhr.send();
}