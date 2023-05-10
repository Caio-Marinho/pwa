function exibir() {
    fetch('/conversao')
      .then(response => response.json())
      .then(data => {
        const dataDiv = document.getElementById('data');
        dataDiv.innerHTML = `Nome: ${data.name}, Idade: ${data.age}`;
      })
      .catch(error => console.error(error));
  }
