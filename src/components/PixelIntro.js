import React, { useState, useEffect } from 'react';
import './PixelIntro.css';

import pixel1 from '../assets/grad.png';
import pixel2 from '../assets/swe.png';
import pixel3 from '../assets/manager.png';
import pixel4 from '../assets/yoohoo.png';

const images = [pixel1, pixel2, pixel3, pixel4];

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
    <div className={`intro-container ${hide ? 'fade-out' : ''}`}>
        <img
            src={images[index]}
            alt=""
            className="pixel-img"

        />

        
    </div>
  );
};

export default PixelIntro;
