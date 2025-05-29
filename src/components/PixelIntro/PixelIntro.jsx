import React, { useState, useEffect } from 'react';
import styles from './PixelIntro.module.css';
import { getImageUrl } from '../../utils';

const images = [
  'grad.png',
  'swe.png', 
  'manager.png',
  'yoohoo.png'
];

const PixelIntro = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < images.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => setHide(true), 800);
          setTimeout(onFinish, 1500);
          return prev;
        }
      });
    }, 1000); 

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`${styles.introContainer} ${hide ? styles.fadeOut : ''}`}>
      <img
        src={getImageUrl(images[index])}
        alt="Intro animation"
        className={styles.pixelImg}
      />
    </div>
  );
};

export default PixelIntro;