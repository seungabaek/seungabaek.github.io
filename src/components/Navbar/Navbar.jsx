import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        <img
            src={getImageUrl("seunga.png")}
            alt="Seung-a Baek"
            // className={styles.heroImg}
          />
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link 
              to="/" 
              className={isActive("/") ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={isActive("/blog") ? styles.active : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={isActive("/resume") ? styles.active : ""}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};