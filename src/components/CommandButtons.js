import React from 'react';
import styles from './CommandButtons.module.scss';

export default function CommandButtons({ shuffle }) {
  return (
    <div className={styles.actions}>
      <div className={styles.action}>Delete</div>
      <div className={[`${styles.action} ${styles.refresh}`]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styles.arrows}
          onClick={() => shuffle()}
        >
          <path d="M463.5 272.1C463.2 272 462.9 272 462.6 272c-4.031 0-7.469 3-7.938 7.094C443.1 379.9 357.7 456 256 456c-85.8 0-161.6-55.56-188.9-136H184C188.4 320 192 316.4 192 312S188.4 304 184 304H48c-4.406 0-8 3.594-8 8v128C40 444.4 43.59 448 48 448s8-3.594 8-8v-104C88.43 416.9 167.2 472 256 472c109.8 0 202.1-82.16 214.6-191.1C471.1 276.5 467.9 272.6 463.5 272.1zM464 64c-4.406 0-8 3.594-8 8v104C423.6 95.09 344.8 40 256 40c-109.8 0-202.1 82.16-214.6 191.1c-.5 4.375 2.625 8.344 7.031 8.844C48.78 239.1 49.09 240 49.38 240c4.031 0 7.469-3 7.938-7.094C68.91 132.1 154.3 56 256 56c85.8 0 161.6 55.56 188.9 136H328C323.6 192 320 195.6 320 200s3.594 8 8 8h136c4.406 0 8-3.594 8-8v-128C472 67.59 468.4 64 464 64z" />
        </svg>
      </div>
      <div className={styles.action}>Enter</div>
    </div>
  );
}
