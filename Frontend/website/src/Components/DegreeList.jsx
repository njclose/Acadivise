import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DegreeList.module.css'; // adjust based on your file structure
import LoadingScreen from '../Components/LoadingScreen';

export default function DegreeList() {
  const { schoolName } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [degreeData, setDegreeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/degrees/${schoolName}`)
      .then(res => res.json())
      .then(data => {
        setDegreeData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch degree data', err);
        setLoading(false);
      });
  }, [schoolName]);

  const filteredDegrees = degreeData.filter(degree =>
    degree.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.degreePage}>
      {/* Only wrap the degreeList, not the full screen */}
      <div className={styles.degreeList} style={{ position: 'relative' }}>
        {loading && <LoadingScreen />} {/* Now it's local to this area */}

        <input
          type="text"
          placeholder="Search for a degree..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />
        {filteredDegrees.length > 0 ? (
          filteredDegrees.map((degree, index) => (
            <button
              key={index}
              className={`${styles.degreeButton} ${index % 2 === 0 ? styles.even : styles.odd}`}
            >
              <h1 className={styles.degreeName}>{degree.name}</h1>
            </button>
          ))
        ) : (
          <div className={styles.noDegrees}>
            <h1>No Degrees</h1>
            <p>Check to make sure that you've typed in the name of your major correctly.</p>
          </div>
        )}
      </div>
    </div>
  );
}

