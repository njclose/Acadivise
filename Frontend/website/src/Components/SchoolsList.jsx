import React, { useState } from 'react';
import styles from './SchoolsList.module.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//Imports for school images
import cu_boulder_logo from '../image_resources/cu_boulder_logo.png';
import cornell_logo from '../image_resources/Cornell_University_Logo.png';
import university_of_wisconsin_stevens_point_logo from '../image_resources/UW_Stevens_Point_Logo.png';

// Array of school data with names and logos
// Note to self: REMEMBER TO ALWAYS IMPORT PHOTOS FROM THE IMAGE_RESOURCES FOLDER BEFORE USING THEM
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
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school, index) => (
            <Link to={`/audit/${school.name.replace(/\s+/g, '-')}`}
              key={index}
              className={`${styles.schoolButton} ${index % 2 === 0 ? styles.even : styles.odd}`}
            >
              <img
                src={school.logo}
                alt={`${school.name} logo`}
                className={styles.schoolLogo}
              />
              <h1 className={styles.schoolName}>{school.name}</h1>
            </Link>
          ))
        ) : (
          <div className={styles.noSchools}>
            <h1>No Schools</h1>
            <p>
              Check to make sure that you've typed in the name of your school correctly.
              If there is a school that we are missing, please send us feedback using this feedback form.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}