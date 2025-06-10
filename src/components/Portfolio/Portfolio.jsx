import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { getImageUrl } from "../../utils";

// Import data from JSON files
import historyData from "../../data/history.json";
import projectsData from "../../data/projects.json";
import skillsData from "../../data/skills.json";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const navigate = useNavigate();

  const enhancedProjects = projectsData.map(project => ({
    ...project,
    tags: project.skills
  }));

  const experiencesData = historyData;

  const aboutMeData = [
    {
      title: "🎓 Georgia Tech Student",
      content: "4th-year CS student with threads in Information Internetworks & Media, plus a double minor in Ocean Sciences & Industrial Design. I love exploring the intersection of technology and creativity!"
    },
    {
      title: "👨‍🏫 Teaching Assistant",
      content: "Fourth-semester TA for CS 1332 (Data Structures & Algorithms). I lead recitations for 20+ students and hold weekly office hours, helping a class size of 1000+ students master Java-based algorithms."
    },
    {
      title: "🌎 Sustainability Advocate",
      content: "International Science Fair Finalist for sustainable technology research. Member of Students Organizing Sustainability at GT, passionate about using tech for environmental impact."
    },
    {
      title: "📻 Radio DJ & Skydiver",
      content: "When I'm not coding, you'll find me on air at WREK 91.1 College Radio or jumping out of planes with the GT Sport Parachute Club. I believe in living life to the fullest!"
    },
    {
      title: "🇰🇷 KSEA Vice President",
      content: "Leading the Korean-American Scientists and Engineers Association at GT, fostering community and professional development for fellow students."
    },
    {
      title: "🌐 Multilingual Communicator",
      content: "Fluent in English and Korean, with novice Spanish skills. I enjoy connecting with people from diverse backgrounds and bringing different perspectives to my work."
    }
  ];

  const handleProjectClick = (project) => {
    navigate(`/blog/${project.id}`);
  };

  const ProjectCard = ({ project }) => (
    <div 
      className={styles.projectCard}
      onClick={() => handleProjectClick(project)}
    >
      <div className={styles.projectImageContainer}>
        <img 
          src={getImageUrl(project.imageSrc)} 
          alt={project.title}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectOverlay}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.projectTags}>
          {project.skills.map((skill, index) => (
            <span key={index} className={styles.tag}>{skill}</span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          <span className={styles.linkIndicator}>📖 Read More</span>
        </div>
      </div>
    </div>
  );

  const ExperienceItem = ({ experience }) => (
    <div className={styles.experienceItem}>
      <div className={styles.experienceImage}>
        <img 
          src={getImageUrl(experience.imageSrc)} 
          alt={experience.organisation}
        />
      </div>
      <div className={styles.experienceContent}>
        <div className={styles.experienceHeader}>
          <h3>{experience.role}</h3>
          <span className={styles.experiencePeriod}>
            {experience.startDate} - {experience.endDate}
          </span>
        </div>
        <h4 className={styles.experienceCompany}>{experience.organisation}</h4>
        <div className={styles.experienceDescription}>
          {experience.experiences.map((exp, index) => (
            <p key={index}>• {exp}</p>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutMeItem = ({ item }) => (
    <div className={styles.aboutMeItem}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  );

  return (
    <section className={styles.container} id="about">
      
      <div className={styles.imageTabNav}>
        {/* Projects Tab */}
        <div 
          className={`${styles.imageTab} ${activeTab === "projects" ? styles.active : ''}`}
          onClick={() => setActiveTab("projects")}
        >
          <div className={styles.characterImage}>
            <img 
              src={getImageUrl("swe1.png")} 
              alt="Me as a Developer"
            />
          </div>
        </div>

        {/* Experiences Tab */}
        <div 
          className={`${styles.imageTab} ${activeTab === "experience" ? styles.active : ''}`}
          onClick={() => setActiveTab("experience")}
        >
          <div className={styles.characterImage}>
            <img 
              src={getImageUrl("manager1.png")} 
              alt="Me as a PM"
            />
          </div>
        </div>

        {/* About Me Tab */}
        <div 
          className={`${styles.imageTab} ${activeTab === "about" ? styles.active : ''}`}
          onClick={() => setActiveTab("about")}
        >
          <div className={styles.characterImage}>
            <img 
              src={getImageUrl("yoohoo1.png")} 
              alt="Me Yoohooing"
            />
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className={`${styles.projectsTab} ${styles.dark}`}>
            <div className={styles.projectGrid}>
              {enhancedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className={`${styles.experienceTab} ${styles.light}`}>
            <div className={styles.experienceList}>
              {experiencesData.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
              ))}
            </div>
          </div>
        )}

        {/* About Me Tab */}
        {activeTab === "about" && (
          <div className={`${styles.aboutTab} ${styles.yellow}`}>
            <div className={styles.aboutMeGrid}>
              {aboutMeData.map((item, index) => (
                <AboutMeItem key={index} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};