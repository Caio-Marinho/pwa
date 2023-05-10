function exibir() {
    fetch('/conversao')
      .then(response => response.json())
      .then(data => {
        const dataDiv = document.getElementById('exibir');
        dataDiv.innerHTML = `${exibir.valor}`;
      })
      .catch(error => console.error(error));
  }
