// pages/Homw.js
import React from 'react';
import '../App.css'; // Import global styles (adjust path as needed)
import styles from './Home.module.css'; // CSS Module
import imageForText from '../image_resources/home_page_main_image.jpg';
import logo_textAboveImage from '../image_resources/acadivise_logo_textAboveImage.png';

export default function Home() {
  return (
    <div className={styles.imageTextContainer1}>
      <img src={imageForText} alt="College student reading book in library" className={styles.imageWithText}/>
      <div className={styles.imageTextOverlay}>
        <p className="latoLight">Welcome to Acadivise — your partner in academic planning. We're building a smarter, more intuitive degree audit system designed specifically for current and future college students. Our goal is to help you track your progress, explore your options, and stay on course to graduate — all with clarity and confidence.</p>
      </div>
      <div></div>
    </div>
  );
}