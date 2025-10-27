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
            <span>Atlanta, GA</span>
            <span className={styles.separator}>|</span>
            <span>(770) 927-8360</span>
            <span className={styles.separator}>|</span>
            <span>iamseungabaek@gmail.com</span>
            <span className={styles.separator}>|</span>
            <span>
              <a href="https://www.linkedin.com/in/seungabaek/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/seungabaek
              </a>
            </span>
            <span className={styles.separator}>|</span>
            <span>
              <a href="https://seungabaek.github.io" target="_blank" rel="noopener noreferrer">
                seungabaek.github.io
              </a>
            </span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className={styles.sectionContent}>
            B.S. Computer Science Senior seeking a new graduate position to apply expertise in product management, data-driven decision
            making, and technical communication with strong foundation in SQL, Java, and Python, building scalable platforms, and translating
            complex technical concepts into clear solutions for cross-functional stakeholders including engineers and customers.
          </p>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <h3>Georgia Institute of Technology, Atlanta, GA</h3>
              <span>August 2021 – December 2025</span>
            </div>
            <div className={styles.educationSubheader}>
              <p>Bachelor of Science in Computer Science, GPA: 3.45/4.0</p>
            </div>
            <ul className={styles.educationList}>
              <li>Concentrations: Information Internetworks & Media</li>
              <li>Double Minor: Industrial Design & Ocean Sciences</li>
              <li>Zell Miller Scholarship (merit-based full tuition)</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          
          {/* CS 1332 TA */}
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>Java Data Structures & Algorithms Teaching Assistant</h3>
              <span>May 2023 – May 2025</span>
            </div>
            <p className={styles.company}>Georgia Institute of Technology, Atlanta, GA</p>
            <ul className={styles.experienceList}>
              <li>Mentored a course size of 1,000+ students through weekly 3-hour office hours, debugging Java code and optimizing algorithm implementations</li>
              <li>Taught 23 students weekly on core programming concepts including dynamic programming, graph algorithms, and data structures</li>
              <li>Enhanced curriculum by improving programming assignments to test edge cases and expose implementation weaknesses</li>
            </ul>
          </div>

          {/* GE Aerospace */}
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>Product Management Intern</h3>
              <span>June 2024 – August 2024</span>
            </div>
            <p className={styles.company}>GE Aerospace, Lynn, MA</p>
            <ul className={styles.experienceList}>
              <li>Saved 187+ hours monthly by building automated tools in VBA/Excel that streamlined 53 cross-functional processes</li>
              <li>Reduced data retrieval time by 73% by shipping web application that gave 22 stakeholders real-time access to critical metrics</li>
              <li>Cut decision-making time by 58% by standardizing data systems across three major engine product lines</li>
            </ul>
          </div>

          {/* UPS */}
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>Data Science/Database Management Intern</h3>
              <span>May 2023 – August 2023</span>
            </div>
            <p className={styles.company}>UPS, Atlanta, GA</p>
            <ul className={styles.experienceList}>
              <li>Improved operational efficiency by 27% by transforming performance metrics into interactive Power BI dashboard with actionable insights</li>
              <li>Increased system reliability by 38% by engineering automated Windows server integration with AppViewX for certificate renewals</li>
              <li>Cut query execution time in half by redesigning IBM DB2 queries and implementing real-time monitoring alerts</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          
          <div className={styles.projectItem}>
            <h3>Live Thrive Recycling Mobile App <span className={styles.techStack}>Flutter, C#, SQL, RESTful APIs</span></h3>
            <ul className={styles.projectList}>
              <li>Reduced pickup scheduling time by 48% by building full-stack iOS/Android app serving 100+ users at local recycling nonprofit</li>
              <li>Collaborated with a team of 5 software engineers to manage daily API requests with 99.9% uptime by designing RESTful backend and optimized database schema</li>
              <li>Achieved 93% user satisfaction by leading usability testing with 52 participants and iterating on feedback</li>
            </ul>
          </div>

          <div className={styles.projectItem}>
            <h3>Threat Intelligence P2P Network <span className={styles.techStack}>Go, Docker, Redis, Cryptography</span></h3>
            <ul className={styles.projectList}>
              <li>Led 5-person team building decentralized network for secure threat intelligence sharing across distributed nodes</li>
              <li>Reduced bandwidth usage by 62% by engineering file chunking algorithm with SHA-256 integrity verification</li>
              <li>Achieved fault-tolerant networking by designing containerized infrastructure using Docker and Redis caching layer</li>
            </ul>
          </div>

          <div className={styles.projectItem}>
            <h3>Manghost Café Multiplayer Game <span className={styles.techStack}>Unity, C#, NavMesh, Networking</span></h3>
            <ul className={styles.projectList}>
              <li>Shipped 2D restaurant simulation game with AI pathfinding, state machines, and real-time multiplayer for 2-4 players</li>
              <li>Eliminated 78% of frame drops by profiling bottlenecks and optimizing rendering pipeline to maintain 60 FPS gameplay</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsContent}>
            <p><strong>Languages:</strong> Java | Python | JavaScript | C# | Go | SQL | C++ | HTML/CSS</p>
            <p><strong>Backend & Systems:</strong> RESTful APIs | Distributed Systems | Docker | Redis | PostgreSQL | IBM DB2 | NoSQL</p>
            <p><strong>Full-Stack & Mobile:</strong> React | Flutter | Node.js | Client/Server Architecture</p>
            <p><strong>Tools & Platforms:</strong> AWS | Git | CI/CD | Linux | Kubernetes | Power BI | Databricks</p>
          </div>
        </section>

        {/* Leadership & Additional */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leadership & Additional</h2>
          <div className={styles.skillsContent}>
            <p><strong>KSEA:</strong> Vice President, led initiatives for 50+ member Korean-American scientists and engineers organization</p>
            <p><strong>Languages:</strong> English (fluent) | Korean (fluent) | Spanish (conversational)</p>
            <p><strong>Extracurricular Qualifications:</strong> Skydiving A-License</p>
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