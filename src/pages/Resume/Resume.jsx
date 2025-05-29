import React from "react";
import styles from "./Resume.module.css";
import { getImageUrl } from "../../utils";

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <div className={styles.resumeContainer}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>Seung-a Baek</h1>
          <div className={styles.contactInfo}>
            <span>seungabaek@gatech.edu</span>
            <span className={styles.separator}>|</span>
            <span>
              <a href="https://www.linkedin.com/in/seungabaek/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/seungabaek
              </a>
            </span>
          </div>
        </header>

        {/* Objective */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Objective</h2>
          <p className={styles.sectionContent}>
            B.S. Computer Science student at Georgia Tech and fourth-semester Teaching Assistant for Java-based data structures 
            and algorithms. Experienced in product and database management, with a track record of working cross-functionally to 
            take ideas from concept to launch. I enjoy contributing across the full product lifecycle—balancing technical feasibility 
            with user needs—and thrive in roles at the intersection of people and technology. With strengths in communication, 
            problem-solving, and execution, I'm eager to help build user-centric solutions that drive real-world impact.
          </p>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <h3>Georgia Institute of Technology</h3>
              <span>Atlanta, GA</span>
            </div>
            <div className={styles.educationHeader}>
              <p>Bachelor of Science in Computer Science</p>
              <span>August 2021 – Dec 2025</span>
            </div>
            <p className={styles.detail}>Information Internetworks & Media Threads</p>
            <p className={styles.detail}>Double Minor in Ocean Sciences & Industrial Design</p>
            <p className={styles.detail}>Zell Miller Scholarship</p>
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsContent}>
            <p><strong>Related Skills:</strong> Java, SQL, C, C++, Python, R, MS Excel, VBA, Power BI, AppViewX, Git, Linux, IBM DB2, Javascript, 
            HTML, CSS, Assembly, ROS, Flutter, React, Wordpress, Leadership, Organization, Problem-solving, Figma, Unity, Agile, 
            Jira, Product Lifecycle, Strategic Planning, frontend, full stack</p>
            
            <p><strong>Professional Organizations:</strong> Korean-American Scientists and Engineers Association (KSEA – Vice President), 
            Students Organizing Sustainability, WREK 91.1 College Radio, GT Sport Parachute Club</p>
            
            <p><strong>Scientific Research:</strong> Sustainable technology, International Science Fair Finalist</p>
            
            <p><strong>Languages:</strong> English (fluent), Korean (fluent), Spanish (novice)</p>
          </div>
        </section>

        {/* Experience */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          
          {/* CS 1332 TA */}
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>CS 1332: Data Structures & Algorithms Teaching Assistant</h3>
              <span>May 2023 – Present</span>
            </div>
            <p className={styles.company}>College of Computing</p>
            <ul className={styles.experienceList}>
              <li>Lead weekly recitations for 20+ students, utilizing effective communication and presentation skills</li>
              <li>Hold weekly 3hr office hours to address individual student needs or clarify concepts with a total class size of 1000+</li>
            </ul>
          </div>

          {/* GE Aerospace */}
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>Product Management Intern</h3>
              <span>June 2024–August 2024</span>
            </div>
            <p className={styles.company}>GE Aerospace</p>
            <ul className={styles.experienceList}>
              <li>Developed and designed a streamlined department website for the MSO CTE team, collaborating with department 
              directors as key customers to enhance accessibility and documentation processes</li>
              <li>Standardized and organized 50+ Field Service Instructions (FSIs) using Excel to improve compliance tracking</li>
              <li>Set guidelines for moving forward and created insert and find tools using VBA</li>
              <li>Standardized nomenclature of parts across engine variants for efficient cost comparisons and data management 
              across product lines</li>
            </ul>
          </div>

          {/* UPS */}
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>IBM Db2 Database Management Intern</h3>
              <span>May 2023 – August 2023</span>
            </div>
            <p className={styles.company}>UPS</p>
            <ul className={styles.experienceList}>
              <li>Developed an interactive dashboard using Microsoft Power BI to visualize anomalies in MIPS, SQL Calls, and 
              GETPAGE data to transform raw data into actionable insights</li>
              <li>Collaborated to create a Windows jump server and integrated it with AppViewX for automated certification renewal</li>
              <li>Gained proficiency in navigating the IBM DB2 mainframe system during the internship</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          
          <div className={styles.projectItem}>
            <h3>Local Recycling Mobile App (Flutter, C#, SQL, Figma, Maze)</h3>
            <ul className={styles.projectList}>
              <li>Prototyped an iOS/Android app for local hazardous waste recycling company, Live Thrive, using Figma and 
              conducted usability testing with Maze</li>
              <li>Developed the front-end in Flutter with a C# and SQL backend to streamline recycling drop-off scheduling</li>
              <li>Implemented interactive user flows and data management features with API calls to enhance accessibility</li>
            </ul>
          </div>

          <div className={styles.projectItem}>
            <h3>Manghost Café (Unity, C#, NavMesh, Git)</h3>
            <ul className={styles.projectList}>
              <li>Developed a 2D multiplayer restaurant simulation in Unity with C#, implementing player state machines, NavMesh­based customer pathfinding, and collision-triggered order fulfillment</li>
              <li>Engineered interactive UI and game logic for task queues, dynamic scene transitions, and multiplayer input handling 
              to support real-time gameplay mechanic</li>
            </ul>
          </div>

          <div className={styles.projectItem}>
            <h3>Threat Intelligence Sharing System (Go, libp2p, Docker)</h3>
            <ul className={styles.projectList}>
              <li>Built a decentralized metadata-sharing platform for cyber threat intelligence using Go, libp2p, and Docker, improving 
              upon the existing IRIS framework</li>
              <li>Implemented metadata chunking and targeted chunk requests over a custom JSON-RPC protocol, enabling efficient 
              peer-to-peer transfer of large threat intelligence datasets without centralized infrastructure</li>
            </ul>
          </div>
        </section>

        {/* Download Button */}
        <div className={styles.downloadSection}>
          <a 
            href={getImageUrl("resume/SeungaBaek_Resume.pdf")} 
            download
            className={styles.downloadButton}
          >
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};