// eslint-disable-next-line consistent-return
function initGTM() {
  if (window.isGTMLoaded) {
    return false;
  }

  window.isGTMLoaded = true;

  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.GA_TRACKING_ID}`;

  script.onload = () => {
    window.dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
      'gtm.uniqueEventId': 0,
    });
  };

  document.head.appendChild(script);
}

function loadGTM(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, loadGTM);
}

exports.onClientEntry = () => {
  document.onreadystatechange = () => {
    if (document.readyState !== 'loading') {
      setTimeout(initGTM, 1000);
    }
  };

  document.addEventListener('scroll', loadGTM);
  document.addEventListener('mousemove', loadGTM);
  document.addEventListener('touchstart', loadGTM);
};
