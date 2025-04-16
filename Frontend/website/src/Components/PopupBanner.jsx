import React, { useEffect, useState } from 'react';
import styles from './PopupBanner.module.css';

export default function PopupBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dismissedForever = localStorage.getItem('popupDismissed');
    const dismissedThisSession = sessionStorage.getItem('popupDismissedSession');

    if (!dismissedForever && !dismissedThisSession) {
      setVisible(true);
    }
  }, []);

  const closePopup = (permanent = false) => {
    setClosing(true);
    setTimeout(() => {
      if (permanent) {
        localStorage.setItem('popupDismissed', 'true');
      } else {
        sessionStorage.setItem('popupDismissedSession', 'true');
      }
      setVisible(false);
      setClosing(false);
    }, 333);
  };

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${closing ? styles.fadeOut : ''}`}>
      <div className={styles.subscriptionAd}>
        <h2 className={`${styles.title} latoBold`}>🎓 Welcome to Acadivise! 🎓</h2>
        <p className={`${styles.message} latoLight`}>
          As we are still in our pre-release phase, we would like to ask our users to make use of our degree feedback tool in the schools tab under your school. You may use this tool to directly notify us of class connections or entire sections of non-public data (such as core classes) we may be missing. Those who participate in this degree feedback (excluding site feedback) will be entered into a drawing for a permanent free premium account (only 500 spots availible). Please keep in mind any fake degree feedback will result in disquilification from the drawing. Also, feel free to make use of the feedback form in the About Us tab to suggest new site features. Happy degreeing!
        </p>
        <div className={styles.controls}>
          <button className={`${styles.linkBtn} latoBold`} onClick={() => closePopup(true)}>
            Don't remind me again
          </button>
          <button className={`${styles.closeBtn} latoBold`} onClick={() => closePopup(false)}>X</button>
        </div>
      </div>
    </div>
  );
}