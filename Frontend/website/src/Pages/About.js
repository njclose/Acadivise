// pages/About.js
import React from 'react';
import '../App.css'; // Import global styles (adjust path as needed)
import styles from './About.module.css'; // CSS Module
import professionalPhoto from '../image_resources/nick_professional_photo.jpg';

export default function About() {
  return (
    <div>
      <h1 className="App-header">This is the About page</h1>
      <img src={professionalPhoto} alt="Founder Nicholas Close" className={styles.professionalPhoto}></img>
      <p>
        Welcome to the About section of our site. Learn more about what we do here!
      </p>
    </div>
  );
}