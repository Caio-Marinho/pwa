function realizarConversao() {
  fetch('/conversao_valor')
    .then(response => response.json())
    .then(data => {
      const valor = data.valor;
      console.log(valor);
    })
    .catch(error => console.error(error));


document.querySelector('#form-conversao').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = new FormData(this);
  const options = {
    method: 'POST',
    body: form
  };
  fetch('/conversao', options)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#conversao').textContent = data.valor;
      realizarConversao();
    })
    .catch(error => console.error(error));
});
}