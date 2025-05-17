import React from 'react';
import './Me.css';

const Me = () => {
  return (
    <section className="hero">
        <h1 className="hero-title">Hi, I'm Seung-a!</h1>
        <p className="hero-description">
            Hi! I'm Seung-a (pronounced like "sing-a"-song). I'm a 4th-year CS student at Georgia Tech 
            and a developer who loves exploring how design and technology shape everyday 
            experiences. I'm always learning, building, and finding better ways 
            to connect people with thoughtful, user-centered solutions.
        </p>
        <a href="#projects" className="scroll-arrow" aria-label="Scroll to projects">
            ⌄
        </a>
    </section>
  );
};

export default Me;
