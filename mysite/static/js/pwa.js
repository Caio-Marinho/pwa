function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('index.html')
        .then(registration => {
          console.log('Service Worker registrado com sucesso:', registration.scope);
        })
        .catch(error => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    }
  }
  
  window.addEventListener('load', registerServiceWorker);