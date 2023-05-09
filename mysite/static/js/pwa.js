function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
      console.log("oi")
        .then(registration => {
          console.log('Service Worker registrado com sucesso:', registration.scope);
        })
        .catch(error => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    }
  }
  
  window.addEventListener('load', registerServiceWorker);