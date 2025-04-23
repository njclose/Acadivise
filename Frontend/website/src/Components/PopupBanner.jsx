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
        <div>
          <button className={`${styles.closeBtn} latoBold`} onClick={() => closePopup(false)}>X</button>
        </div>
        <h2 className={`${styles.title} latoBold`}>🎓 Welcome to Acadivise! 🎓</h2>
        <p className={`${styles.message} latoLight`}>
        As we continue refining our platform during the pre-release phase, we invite you to explore the Degree Feedback tool under your school in the Schools tab. This feature allows you to notify us of any missing class connections or non-public curriculum details—such as core requirements—that may not yet be reflected. Users who provide valid, degree-specific feedback (excluding general site suggestions) will be entered into a drawing for a lifetime premium account, with only 500 spots available. Please note that any false or misleading submissions will result in disqualification. You can also suggest new site features via the feedback form in the About Us tab. Thank you for supporting Acadivise as we work toward delivering a smarter, more complete degree audit experience.
        </p>
        <div>
          <button className={`${styles.linkBtn} latoBold`} onClick={() => closePopup(true)}>
            Don't remind me again
          </button>
        </div>
      </div>
    </div>
  );
}