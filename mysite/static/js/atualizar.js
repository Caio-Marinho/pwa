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
