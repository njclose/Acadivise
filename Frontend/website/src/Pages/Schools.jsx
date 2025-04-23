// pages/Schools.js
import React from 'react';
import '../App.css'; // Import global styles (adjust path as needed)
import styles from './Schools.module.css'; // CSS Module
import SchoolsList from '../Components/SchoolsList';

export default function Schools() {
  return (
    <div>
      <SchoolsList />
    </div>
  );
}