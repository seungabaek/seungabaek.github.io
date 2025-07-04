import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Portfolio.module.css"; 
import { getImageUrl } from "../../utils";
import { projectImages } from "/src/data/projects/images.js";
import { experienceImages } from "/src/data/experiences/images.js"; 

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();

  const loadMarkdownFile = async (projectId) => {
    try {
      let markdownModule;
      
      switch (projectId) {
        case "recycling-app":
          markdownModule = await import("/src/data/projects/livethrive-project.md?raw");
          break;
        case "manghost-cafe":
          markdownModule = await import("/src/data/projects/manghost-project.md?raw");
          break;
        case "threat-intelligence":
          markdownModule = await import("/src/data/projects/threat-intelligence.md?raw");
          break;
        default:
          throw new Error(`Project ${projectId} not found`);
      }
      
      return markdownModule.default;
    } catch (error) {
      console.error(`Error loading markdown for ${projectId}:`, error);
      throw error;
    }
  };

  const loadExperienceFile = async (experienceId) => {
    try {
      let markdownModule;
      
      switch (experienceId) {
        case "1332":
          markdownModule = await import("/src/data/experiences/1332.md?raw");
          break;
        case "ge-intern":
          markdownModule = await import("/src/data/experiences/ge-intern.md?raw");
          break;
        case "ups-intern":
          markdownModule = await import("/src/data/experiences/ups-intern.md?raw");
          break;
        default:
          throw new Error(`Experience ${experienceId} not found`);
      }
      
      return markdownModule.default;
    } catch (error) {
      console.error(`Error loading experience markdown for ${experienceId}:`, error);
      throw error;
    }
  };

  // Simple frontmatter parser
  const parseFrontmatter = (content) => {
    try {
      const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
      const match = content.match(frontmatterRegex);
      
      if (!match) {
        console.warn("No frontmatter found in content");
        return { data: {}, content };
      }
      
      const frontmatterText = match[1];
      const markdownContent = match[2];
      
      // Simple YAML parser for frontmatter
      const data = {};
      frontmatterText.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
          const key = line.substring(0, colonIndex).trim();
          let value = line.substring(colonIndex + 1).trim();
          
          // Remove quotes if present
          if ((value.startsWith('"') && value.endsWith('"')) || 
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          
          // Handle arrays (skills and experiences)
          if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map(item => 
              item.trim().replace(/['"]/g, '')
            );
          }
          
          data[key] = value;
        }
      });
      
      return { data, content: markdownContent };
    } catch (error) {
      console.error("Error parsing frontmatter:", error);
      return { data: {}, content };
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadAllData = async () => {
      try {
        console.log('🔄 Starting data load...');
        setLoading(true);
        setError(null);

        // Load projects with better error handling
        const projectIds = ["recycling-app", "manghost-cafe", "threat-intelligence"];
        const projectsData = await Promise.allSettled(
          projectIds.map(async (id) => {
            try {
              const content = await loadMarkdownFile(id);
              const { data } = parseFrontmatter(content);
              
              // Safe image loading with fallback
              const projectImageSrc = data.heroImage ? 
                (projectImages[data.heroImage] || null) : null;
              
              // Handle multiple hero images (use first one for thumbnail)
              let thumbnailImageSrc = projectImageSrc;
              if (data.heroImages && Array.isArray(data.heroImages) && data.heroImages.length > 0) {
                const firstHeroImage = projectImages[data.heroImages[0]];
                if (firstHeroImage) {
                  thumbnailImageSrc = firstHeroImage;
                }
              }
              
              // Handle multiple additional images for projects
              const additionalImagesSrc = [];
              if (data.additionalImages && Array.isArray(data.additionalImages)) {
                data.additionalImages.forEach(imageKey => {
                  const imageSrc = projectImages[imageKey];
                  if (imageSrc) {
                    additionalImagesSrc.push(imageSrc);
                  }
                });
              }
              
              console.log(`✅ Loaded project ${id}:`, data.title);
              
              return {
                id,
                title: data.title || "Untitled Project",
                description: data.description || "No description available",
                imageSrc: thumbnailImageSrc,
                additionalImages: additionalImagesSrc,
                skills: Array.isArray(data.skills) ? data.skills : [],
                date: data.date || "",
                demo: data.demo || "",
                source: data.source || "",
                tags: Array.isArray(data.skills) ? data.skills : []
              };
            } catch (err) {
              console.warn(`❌ Failed to load project ${id}:`, err);
              return null;
            }
          })
        );

        // Load experiences with better error handling
        const experienceIds = ["1332", "ge-intern", "ups-intern"];
        const experiencesData = await Promise.allSettled(
          experienceIds.map(async (id) => {
            try {
              const content = await loadExperienceFile(id);
              const { data } = parseFrontmatter(content);
              
              // Safe image loading with fallback
              const experienceImageSrc = data.heroImage ? 
                (experienceImages[data.heroImage] || null) : null;
              
              console.log(`✅ Loaded experience ${id}:`, data.title);
              
              return {
                id,
                title: data.title || "Untitled Experience",
                role: data.role || "Role not specified",
                organisation: data.organisation || "Organization not specified",
                startDate: data.startDate || "",
                endDate: data.endDate || "",
                imageSrc: experienceImageSrc,
                skills: Array.isArray(data.skills) ? data.skills : [],
                location: data.location || "",
                experiences: Array.isArray(data.experiences) ? data.experiences : []
              };
            } catch (err) {
              console.warn(`❌ Failed to load experience ${id}:`, err);
              return null;
            }
          })
        );
        
        // Filter out failed loads and extract values from Promise.allSettled
        const validProjects = projectsData
          .filter(result => result.status === 'fulfilled' && result.value !== null)
          .map(result => result.value);
          
        const validExperiences = experiencesData
          .filter(result => result.status === 'fulfilled' && result.value !== null)
          .map(result => result.value);
        
        console.log('📊 Final data:', {
          projects: validProjects.length,
          experiences: validExperiences.length
        });
        
        setProjects(validProjects);
        setExperiences(validExperiences);
        setLoading(false);
        
      } catch (err) {
        console.error("❌ Critical error loading data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  const aboutMeData = [
    {
    title: "🤳🏻 Avid Picture Taker",
    content: "After my ride or die Sony camera died with ingesting too much sand during my trip to the Sahara desert, I have been faithful to an Olympus film camera I thrifted in Shoreditch (all while I was on an exchange program in Leeds, UK!). Click on <a href = \"https://ea.oie.gatech.edu/2024-photo-contest-winners\"> ME </a> to see the film picture I got my first award for! Photo website also in the works!"
    },
    {
      title: "🪂 Jumping out of Planes!",
      content: "I'm almost done with my skydiving A license! I've finished 8 solo jumps and am now on my consoles (free jumps to practice your skills)! Now that I have finished all CS courses, I will have more time to be active in the GT Sport Parachute Club to finish up what I started. (it will never end!)"
    },
    {
      title: "📻 WREK 91.1",
      content: "WREK is Georgia Tech's student-run radio. Tune in 24/7 on 91.1 or click <a href=\"https://open.spotify.com/playlist/5EKtIEB8ziSGxuyiW5jLSj?si=d67b6198d7ed4372\">HERE</a> to see my Spotify playlist of favorite songs I compiled during my shifts! To-be infinitely grown."
    },
    {
      title: "🐳 An Ocean Sciences Minor?",
      content: "I started off at GT as a 1st year Earth and Atmospheric Sciences major with lots of independent research experience + International Science Fair Finalist for atmospheric science research. Although I've changed paths, my interest in sustainable tech remains, hence the minor. I hope to grow my skills for use in non-traditionally technical fields for possitive environmental impact."
    },
    {
      title: "🇰🇷 KSEA Vice President",
      content: "Starting as a freshman representative to leading the Korean-American Scientists and Engineers Association at GT, I've been very active in the KSEA community and am passionate about fostering community and professional development for fellow students! This has helped diversify my college experience with invitations to both national and international conventions!"
    },
    {
      title: "🌐 Multilingual Communicator",
      content: "Fluent in English and Korean, with novice Spanish skills. I enjoy connecting with people from diverse backgrounds and bringing different perspectives to my work."
    }
  ];

  const handleProjectClick = (project) => {
    navigate(`/blog/${project.id}`);
  };

  const handleExperienceClick = (experience) => {
    navigate(`/experience/${experience.id}`);
  };

  const ProjectCard = ({ project }) => (
    <div 
      className={styles.projectCard}
      onClick={() => handleProjectClick(project)}
    >
      <div className={styles.projectImageContainer}>
        {project.imageSrc ? (
          <img 
            src={project.imageSrc} 
            alt={project.title}
            className={styles.projectImage}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#666'
          }}>
            No Image Available
          </div>
        )}
      </div>
      <div className={styles.projectOverlay}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.projectTags}>
          {project.skills.slice(0, 4).map((skill, index) => (
            <span key={index} className={styles.tag}>{skill}</span>
          ))}
          {project.skills.length > 4 && (
            <span className={styles.tag}>+{project.skills.length - 4}</span>
          )}
        </div>
        <div className={styles.projectLinks}>
          <span className={styles.linkIndicator}>📖 Read More</span>
        </div>
      </div>
    </div>
  );

  const ExperienceItem = ({ experience }) => (
    <div 
      className={styles.experienceItem}
      onClick={() => handleExperienceClick(experience)}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.experienceImage}>
        {experience.imageSrc ? (
          <img 
            src={experience.imageSrc} 
            alt={experience.organisation}
          />
        ) : (
          <div style={{ 
            width: '80px', 
            height: '80px', 
            backgroundColor: '#f0f0f0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '10px',
            color: '#666',
            borderRadius: '12px',
            textAlign: 'center',
            padding: '5px'
          }}>
            {experience.organisation}
          </div>
        )}
      </div>
      <div className={styles.experienceContent}>
        <div className={styles.experienceHeader}>
          <h3>{experience.role}</h3>
          <span className={styles.experiencePeriod}>
            {experience.startDate} - {experience.endDate}
          </span>
        </div>
        <h4 className={styles.experienceCompany}>{experience.organisation}</h4>
        <p className={styles.experienceLocation}>{experience.location}</p>
        <div className={styles.experienceDescription}>
          {experience.experiences.slice(0, 2).map((exp, index) => (
            <p key={index}>• {exp}</p>
          ))}
          {experience.experiences.length > 2 && (
            <p style={{ fontStyle: 'italic', color: '#666' }}>
              Click to read more...
            </p>
          )}
        </div>
        <div className={styles.experienceTags}>
          {experience.skills.slice(0, 4).map((skill, index) => (
            <span key={index} className={styles.tag}>{skill}</span>
          ))}
          {experience.skills.length > 4 && (
            <span className={styles.tag}>+{experience.skills.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );

  const AboutMeItem = ({ item }) => (
    <div className={styles.aboutMeItem}>
      <h3>{item.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
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
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'white' }}>
                Loading projects...
              </div>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#ff6b6b' }}>
                Error loading projects: {error}
              </div>
            ) : (
              <div className={styles.projectGrid}>
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px', color: 'white' }}>
                    No projects found
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className={`${styles.experienceTab} ${styles.light}`}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#333' }}>
                Loading experiences...
              </div>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#cc0000' }}>
                Error loading experiences: {error}
              </div>
            ) : (
              <div className={styles.experienceList}>
                {experiences.length > 0 ? (
                  experiences.map((experience, index) => (
                    <ExperienceItem key={experience.id || index} experience={experience} />
                  ))
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px', color: '#333' }}>
                    No experiences found
                  </div>
                )}
              </div>
            )}
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