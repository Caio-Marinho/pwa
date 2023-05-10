function exibir() {
    fetch('/conversao')
      .then(response => response.json())
      .then(exibir => {
        const exibir = document.getElementById('exibir');
        exibir.innerHTML = `${exibir.valor}`;
      })
      .catch(error => console.error(error));
  }
