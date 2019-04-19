import React, {useState, useEffect, useRef} from 'react';
import {reanimate} from '../../../utils'
import styles from './progress.scss';

const width = 39;

const getOffset = (progress = 0) => {
  progress = Math.max(Math.min(progress, 100), 0);

  return width * (100 - progress) / 100;
};

export const Progress = ({progress, color, ...props}) => {
  const negativeEl = useRef(null);
  const [savedProgress, saveProgress] = useState(progress);
  const [diff, saveDiff] = useState(0);

  useEffect(() => {
    const diff = progress - savedProgress;
    saveDiff(diff);
    saveProgress(progress);

    if (diff < 0) {
      reanimate(negativeEl.current, styles.fade);
    }
  }, [progress]);

  return (
    <svg
      className={styles.base}
      width="200"
      height="5"
      viewBox="0 0 40 1"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray={width}
      {...props}
    >
      <path stroke="#eee" d={`M.5.5 h${width}`} />
      {
        <path
          ref={negativeEl}
          style={{strokeDashoffset: getOffset(progress - diff)}}
          d={`M.5.5 h${width}`}
        />
      }
      <path
        className={styles.progress}
        style={{strokeDashoffset: getOffset(progress)}}
        d={`M.5.5 h${width}`}
        strokeDashoffset={width}
      />
    </svg>
  );
};
