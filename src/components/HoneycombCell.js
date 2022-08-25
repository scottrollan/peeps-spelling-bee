import React from 'react';
import styles from './HoneycombCell.module.scss';

export default function HoneycombCell({ middleLetter, outerLetters }) {
  return (
    <div className={styles.hive}>
      <div className={styles.honeycomb}>
        <svg className={styles.cellWrapper} id={styles.cell1}>
          <polygon
            className={styles.outsideCell}
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            strokeWidth="7.5"
          ></polygon>
          <text className={styles.cellLetter} x="50%" y="50%" dy="0.35em">
            W
          </text>
        </svg>
        <svg className={styles.cellWrapper} id={styles.cell2}>
          <polygon
            className={styles.outsideCell}
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            strokeWidth="7.5"
          ></polygon>
          <text className={styles.cellLetter} x="50%" y="50%" dy="0.35em">
            W
          </text>
        </svg>

        <svg className={styles.cellWrapper} id={styles.cell3}>
          <polygon
            className={styles.outsideCell}
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            strokeWidth="7.5"
          ></polygon>
          <text className={styles.cellLetter} x="50%" y="50%" dy="0.35em">
            W
          </text>
        </svg>

        <svg className={styles.cellWrapper} id={styles.cellMiddle}>
          <polygon
            className={styles.middleCell}
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            strokeWidth="7.5"
          ></polygon>
          <text className={styles.cellLetter} x="50%" y="50%" dy="0.35em">
            {middleLetter}
          </text>
        </svg>
        <svg className={styles.cellWrapper} id={styles.cell4}>
          <polygon
            className={styles.outsideCell}
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            strokeWidth="7.5"
          ></polygon>
          <text className={styles.cellLetter} x="50%" y="50%" dy="0.35em">
            W
          </text>
        </svg>

        <svg className={styles.cellWrapper} id={styles.cell5}>
          <polygon
            className={styles.outsideCell}
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            strokeWidth="7.5"
          ></polygon>
          <text className={styles.cellLetter} x="50%" y="50%" dy="0.35em">
            W
          </text>
        </svg>

        <svg className={styles.cellWrapper} id={styles.cell6}>
          <polygon
            className={styles.outsideCell}
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            strokeWidth="7.5"
          ></polygon>
          <text className={styles.cellLetter} x="50%" y="50%" dy="0.35em">
            W
          </text>
        </svg>
      </div>
    </div>
  );
}
