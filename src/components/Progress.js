import React, { useState } from 'react';
import styles from './Progress.module.scss';

export default function Progress({ points, percentage }) {
  const [level, setLevel] = useState('Beginner');

  const componentStyles = {
    fillerStyles: {
      height: '100%',
      width: `${percentage}%`,
      backgroundColor: 'var(--bee-yellow)',
      textAlign: 'right',
    },
  };

  const getLevel =
    percentage < 2.0
      ? 'Beginner'
      : percentage >= 2.0 && percentage < 5
      ? 'Good Start'
      : percentage >= 5.0 && percentage < 8.4
      ? 'Moving Up'
      : percentage >= 8.4 && percentage < 14.75
      ? 'Good'
      : percentage >= 14.75 && percentage < 25
      ? 'Solid'
      : percentage >= 24 && percentage < 40
      ? 'Nice'
      : percentage >= 40 && percentage < 50
      ? 'Great'
      : percentage >= 50 && percentage < 70
      ? 'Amazing'
      : percentage >= 70 && percentage < 100
      ? 'Genius'
      : 'Queen Bee';

  return (
    <div className={styles.progress}>
      <div className={styles.progressLine}>
        <span className={styles.descriptor}>{getLevel}</span>
        <div className={styles.containerStyles}>
          <div style={componentStyles.fillerStyles}></div>
        </div>
      </div>
      <div className={styles.boxWrapper}>
        <div className={styles.boxLine}>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 0 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 2 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 5 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 8.4 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 14.75 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 25 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 40 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 50 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage >= 70 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div>
          {/* <div
            className={styles.box}
            style={{
              backgroundColor:
                percentage > 0 ? 'var(--bee-yellow)' : 'var(--bee-gray)',
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
}
