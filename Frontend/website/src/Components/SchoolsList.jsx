import React, { useState } from 'react';
import styles from './SchoolsList.module.css';

//Imports for school images
import cu_boulder_logo from '../image_resources/cu_boulder_logo.png';
import cornell_logo from '../image_resources/Cornell_University_Logo.png';
import university_of_wisconsin_stevens_point_logo from '../image_resources/UW_Stevens_Point_Logo.png';

const schoolsData = [
  { name: 'University of Colorado Boulder', logo: cu_boulder_logo },
  { name: 'Cornell University', logo: cornell_logo },
  { name: 'University of Wisconsin - Stevens Point', logo: university_of_wisconsin_stevens_point_logo },
];

export default function SchoolsList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSchools = schoolsData.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => a.name.localeCompare(b.name));

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