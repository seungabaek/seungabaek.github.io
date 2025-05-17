import React from 'react';
import './TopNav.css';

import grad from '../assets/grad.png';
import swe from '../assets/swe.png';
import pm from '../assets/manager.png';
import yoohoo from '../assets/yoohoo.png';

const navItems = [
  { icon: grad, label: 'Home', link: '/' },
  { icon: swe, label: 'Projects', link: '/projects' },
  { icon: pm, label: 'About', link: '/about' },
  { icon: yoohoo, label: 'Contact', link: '/contact' },
];

const TopNav = () => {
  return (
    <header className="topnav">
      {navItems.map((item, i) => (
        <a href={item.link} key={i} className="nav-icon" title={item.label}>
          <img src={item.icon} alt={item.label} />
        </a>
      ))}
    </header>
  );
};

export default TopNav;
