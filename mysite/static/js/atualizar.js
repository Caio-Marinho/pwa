function atualizarConteudo(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://localhost:5000',true);

    xhr.onload = function(){
        if(xhr.status >=200 && xhr.status < 400){
            const data = xhr.responseText;
            document.body.innerHTML = data;
        }
    };

    xhr.send();
}

atualizarConteudo();

setInterval(atualizarConteudo,5000)