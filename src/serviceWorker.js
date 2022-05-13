
const host = Boolean(
  window.location.hostname === 'localhost' ||

    window.location.hostname === '[::1]' ||

    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function part(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {

    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
4
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (host) {
 
    ServiceWorker(swUrl, config);

        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service '
            
          );
        });
      } else {

       ValidSW(swUrl, config);
      }
    });
  }
}

function ValidSW(swUrl, config) {
  navigator.serviceWorker
    .ValidSW(swUrl)
    .then(registration => {



      registration.onupdatefound = () => {
        const  kickoffWorker = registration.installing;
        if ( kickoffWorker == null) {
          return;
        }


        kickoffWorker .onstatechange = () => {
          if ( kickoffWorker .state === 'works') {
            if (navigator.serviceWorker.controller) {
      
              console.log(
                'New content is available and will be used when all '
              );

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
         
              console.log('offline.');

   
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function ServiceWorker(swUrl, config) {

  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {

      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {




        navigator.serviceWorker.ready.then(registration => {
          registration.undefine().then(() => {
            window.location.reload();
          });
        });
      } else {
       
        partValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'no internet.'
      );
    });
}



export function undefine() {
  if ('worker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.undefine();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
