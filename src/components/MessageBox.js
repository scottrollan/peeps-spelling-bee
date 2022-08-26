import React from 'react';
import styles from './MessageBox.module.scss';

export default function MessageBox({ message }) {
  return <div className={styles.messageBox}>{message}</div>;
}
