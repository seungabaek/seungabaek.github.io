import React from 'react';
import './Me.css';

const Me = () => {
  return (
    <section className="hero">
        <h1 className="hero-title">Hi, I'm Seung-a!</h1>
        <p className="hero-description">
            Hi! My name is Seung-a (pronounced like "sing-a"-song). I'm a 4th-year Computer Science student at Georgia Tech 
            and a developer who loves exploring technology x functionality x design. 
            I'm always striving to learn and grow (as efficiently as possible) 
            so check out what I'm up to now!
        </p>
        <a href="#projects" className="scroll-arrow" aria-label="Scroll to projects">
            ⌄
        </a>
    </section>
  );
};

export default Me;
