import React from 'react';
import style from './LoadingScreen.module.css';

export default function LoadingScreen() {
  return (
    <div className={style.loadingOverlay}>
      <div className={style.loadingSpinner}></div>
      <p className={style.loadingText}>Loading...</p>
    </div>
  );
}