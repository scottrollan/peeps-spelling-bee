import React from 'react';

export default function Input({ guessLtrs }) {
  return (
    <div style={{ minHeight: '3.25em' }}>
      <span style={styles.input}>{guessLtrs}</span>
    </div>
  );
}

const styles = {
  input: {
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '.5px',
    textRendering: 'optimizeLegibility',
    lineHeight: '1.25',
    height: '1.25em',
    minHeight: '1.25em',
    width: '100%',
    fontSize: '2em',
    paddingTop: '2px',
    textAlign: 'center',
    position: 'relative',
  },
};
