import React, { useState, useEffect } from 'react';
import './PixelIntro.css';

import grad from '../assets/grad.png';
import swe from '../assets/swe.png';
import manager from '../assets/manager.png';
import yoohoo from '../assets/yoohoo.png';

const images = [grad, swe, manager, yoohoo];

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
