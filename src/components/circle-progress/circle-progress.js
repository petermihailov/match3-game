import React from 'react';
import styles from './circle-progress.scss';

const radius = 4.5;
const getOffset = (progress = 0) => {
  progress = Math.max(Math.min(progress, 100), 0);

  return ((100 - progress) / 100) * Math.PI * (radius * 2);
};

export const CircleProgress = ({progress, color, ...props}) => (
  <svg
    className={styles.base}
    viewBox="0 0 10 10"
    fill="transparent"
    width="70"
    height="70"
    {...props}
  >
    <circle r={radius} cx="5" cy="5" />
    <circle
      style={{
        stroke: color,
        strokeDashoffset: getOffset(progress),
      }}
      r={radius}
      cx="5"
      cy="5"
      strokeDasharray="28.275"
      strokeDashoffset="0"
    />
  </svg>
);
