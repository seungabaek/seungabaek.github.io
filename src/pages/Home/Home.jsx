import React, { useState, useEffect } from "react";
import { Hero } from "../../components/Hero/Hero";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Contact } from "../../components/Contact/Contact";
import PixelIntro from "../../components/PixelIntro/PixelIntro";
import styles from "./Home.module.css";
import GitHubCalendar from 'react-github-calendar';


export const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  //pixel intro
  useEffect(() => {
    // make sure it only plays once
    const visited = sessionStorage.getItem('hasVisitedHome');
    if (visited) {
      setShowIntro(false);
      setHasVisited(true);
    }
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
    setHasVisited(true);
    sessionStorage.setItem('hasVisitedHome', 'true');
  };

  return (
    <div className={styles.home}>
      {showIntro && !hasVisited && (
        <PixelIntro onFinish={handleIntroFinish} />
      )}
      <Hero />
      <Portfolio />
      
      {/* GitHub Calendar Section */}
      <section className={styles.githubCalendarSection}>
        <h2 className={styles.githubCalendarTitle}>My Git!</h2>
        <div className={styles.githubCalendarContainer}>
        <GitHubCalendar 
          username="seungabaek" 
          colorScheme="light"
          theme={{
            light: ['#ebedf0', '#c8e6c9', '#a5d6a7', '#81c784', '#4caf50'],
            dark: ['#161b22', '#c8e6c9', '#a5d6a7', '#81c784', '#4caf50']
          }}
        />
        </div>
      </section>
      
      <Contact />
    </div>
  );
};