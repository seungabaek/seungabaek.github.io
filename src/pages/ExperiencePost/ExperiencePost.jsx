// Create this file: src/pages/ExperiencePost/ExperiencePost.jsx

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ExperiencePost.module.css";
import { experienceImages } from "/src/data/experiences/images.js";

export const ExperiencePost = () => {
  const { experienceId } = useParams();
  const [experience, setExperience] = useState(null);
  const [allExperiences, setAllExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dynamic import approach for experience markdown files
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
          throw new Error("Experience not found");
      }
      
      return markdownModule.default;
    } catch (error) {
      console.error("Error loading experience markdown:", error);
      throw error;
    }
  };

  // Simple frontmatter parser (same as BlogPost)
  const parseFrontmatter = (content) => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
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
  };

  // Simple markdown renderer (same as BlogPost)
  const renderMarkdown = (content) => {
    return content.split('\n').map((line, index) => {
      const trimmed = line.trim();

      // Horizontal rules
      if (trimmed === '---') {
        return <hr key={index} className={styles.contentHr} />;
      }

      // Headers
      if (trimmed.startsWith('# ')) {
        return <h1 key={index} className={styles.contentH1}>{trimmed.substring(2)}</h1>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={index} className={styles.contentH2}>{trimmed.substring(3)}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={index} className={styles.contentH3}>{trimmed.substring(4)}</h3>;
      }
      if (trimmed.startsWith('#### ')) {
        return <h4 key={index} className={styles.contentH4}>{trimmed.substring(5)}</h4>;
      }

      // Lists
      if (trimmed.startsWith('- ')) {
        const listContent = trimmed.substring(2);
        const processedContent = listContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return <li key={index} className={styles.contentLi} dangerouslySetInnerHTML={{ __html: processedContent }} />;
      }

      // Skip empty lines
      if (trimmed === '') {
        return null;
      }

      // Regular paragraph with formatting
      let processedLine = trimmed;
      
      // Bold text
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Inline code
      processedLine = processedLine.replace(/`(.*?)`/g, '<code class="inline-code">$1</code>');
      
      // Links
      processedLine = processedLine.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="content-link" target="_blank" rel="noopener noreferrer">$1</a>');

      return <p key={index} className={styles.contentP} dangerouslySetInnerHTML={{ __html: processedLine }} />;
    }).filter(element => element !== null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadExperience = async () => {
      try {
        // Load experience content
        const experienceContent = await loadExperienceFile(experienceId);
        
        // Parse frontmatter and content
        const { data: frontmatter, content } = parseFrontmatter(experienceContent);
        
        // Get the hero image from experienceImages
        const heroImageSrc = experienceImages[frontmatter.heroImage] || null;
        
        // Create experience object with frontmatter data
        const experienceData = {
          id: experienceId,
          title: frontmatter.title || `Experience: ${experienceId}`,
          role: frontmatter.role || "",
          organisation: frontmatter.organisation || "",
          startDate: frontmatter.startDate || "",
          endDate: frontmatter.endDate || "",
          location: frontmatter.location || "",
          imageSrc: heroImageSrc,
          skills: frontmatter.skills || [],
          content: content
        };

        setExperience(experienceData);
        
        // Load other experiences for related posts
        const otherExperienceIds = ["1332", "ge-intern", "ups-intern"].filter(id => id !== experienceId);
        const otherExperiences = await Promise.all(
          otherExperienceIds.map(async (id) => {
            try {
              const content = await loadExperienceFile(id);
              const { data } = parseFrontmatter(content);
              const relatedImageSrc = experienceImages[data.heroImage] || null;
              return {
                id,
                title: data.title,
                role: data.role,
                organisation: data.organisation,
                imageSrc: relatedImageSrc,
                startDate: data.startDate,
                endDate: data.endDate
              };
            } catch (err) {
              console.warn(`Failed to load experience ${id}:`, err);
              return null;
            }
          })
        );
        
        setAllExperiences(otherExperiences.filter(e => e !== null));
        setLoading(false);
      } catch (err) {
        console.error("Error loading experience:", err);
        setError("Failed to load experience: " + err.message);
        setLoading(false);
      }
    };

    loadExperience();
  }, [experienceId]);

  if (loading) {
    return (
      <div className={styles.experiencePost}>
        <div className={styles.container}>
          <div className={styles.loading}>
            <h2>Loading experience...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error || !experience) {
    return (
      <div className={styles.experiencePost}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1>Experience Not Found</h1>
            <p>The experience you're looking for doesn't exist.</p>
            <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.experiencePost}>
      <div className={styles.container}>
        <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
        
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{experience.title}</h1>
            <div className={styles.experienceDetails}>
              <h2 className={styles.role}>{experience.role}</h2>
              <h3 className={styles.organisation}>{experience.organisation}</h3>
              <p className={styles.period}>
                {experience.startDate} - {experience.endDate}
              </p>
              {experience.location && (
                <p className={styles.location}>📍 {experience.location}</p>
              )}
            </div>
            {experience.skills && experience.skills.length > 0 && (
              <div className={styles.skills}>
                {experience.skills.map((skill, index) => (
                  <span key={index} className={styles.tag}>{skill}</span>
                ))}
              </div>
            )}
          </header>
          
          {experience.imageSrc && (
            <div className={styles.featuredImage}>
              <img src={experience.imageSrc} alt={experience.organisation} />
            </div>
          )}
          
          <div className={styles.content}>
            <div className={styles.markdownContent}>
              {renderMarkdown(experience.content)}
            </div>
          </div>

          {/* Contact Box */}
          <div className={styles.contactBox}>
            <p>
              Interested in learning more about my experience?{' '}
              <Link to="/resume" className={styles.contactLink}>
                View My Resume
              </Link>
              {' '}or{' '}
              <a href="mailto:seungabaek@gatech.edu" className={styles.contactLink}>
                send me an email
              </a>
            </p>
          </div>

          {/* Other Experiences */}
          {allExperiences.length > 0 && (
            <div className={styles.readMoreSection}>
              <h2>Other Experiences</h2>
              <div className={styles.relatedPosts}>
                {allExperiences.map((relatedExperience) => (
                  <Link 
                    key={relatedExperience.id}
                    to={`/experience/${relatedExperience.id}`}
                    className={styles.relatedPost}
                  >
                    <div className={styles.relatedImage}>
                      <img 
                        src={relatedExperience.imageSrc} 
                        alt={relatedExperience.organisation}
                      />
                    </div>
                    <div className={styles.relatedContent}>
                      <h3>{relatedExperience.role}</h3>
                      <p>{relatedExperience.organisation}</p>
                      <p className={styles.relatedPeriod}>
                        {relatedExperience.startDate} - {relatedExperience.endDate}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};