import { useState } from 'react';
import Cookies from 'js-cookie'; // Optional, for persistent state

const CookieBanner = () => {
  // State to track visibility
  const [visible, setVisible] = useState(!Cookies.get('cookiesAccepted'));

  const handleAcceptCookies = () => {
    // Set a cookie to indicate acceptance
    Cookies.set('cookiesAccepted', 'true', { expires: 365 });
    // Update state to hide the banner
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div
          className="js-notification js-notification-cookie-banner notification notification-fixed-bottom notification-primary text-left font-small"
          style={{}}
        >
          Al navegar por este sitio <strong>aceptás el uso de cookies</strong> para
          agilizar tu experiencia de compra.
          <a
            href="#"
            onClick={handleAcceptCookies}
            className="js-notification-close js-acknowledge-cookies btn btn-link font-small pt-1 pl-1 d-inline-block"
            data-amplitude-event-name="cookie_banner_acknowledge_click"
          >
            Entendido
          </a>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
