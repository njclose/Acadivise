import React, { useState } from 'react';
import styles from './SchoolsList.module.css';

const schoolsData = [
  { name: 'University of Colorado Boulder', logo: '../image_resources/cu_boulder_logo'},
  { name: 'Stanford University', logo: 'logos/stanford.png' },
  { name: 'MIT', logo: 'logos/mit.png' },
  { name: 'UC Berkeley', logo: 'logos/berkeley.png' },
  { name: 'Princeton University', logo: 'logos/princeton.png' },
  { name: 'Yale University', logo: 'logos/yale.png' },
  { name: 'Columbia University', logo: 'logos/columbia.png' },
  { name: 'University of Chicago', logo: 'logos/uchicago.png' },
  { name: 'University of Michigan', logo: 'logos/michigan.png' },
  { name: 'Duke University', logo: 'logos/duke.png' }
];

export default function SchoolsList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSchools = schoolsData.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.schoolPage}>
      <div className={styles.schoolList}>
        <input
          type="text"
          placeholder="Search for a school..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />
        {filteredSchools.map((school, index) => (
          <button
            key={index}
            className={`${styles.schoolButton} ${index % 2 === 0 ? styles.even : styles.odd}`}
          >
            <img
              src={school.logo}
              alt={`${school.name} logo`}
              className={styles.schoolLogo}
            />
            <h1 className={styles.schoolName}>{school.name}</h1>
          </button>
        ))}
      </div>
    </div>
  );
}