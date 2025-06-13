import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";
import { projectImages } from "/src/data/projects/images.js";
import { experienceImages } from "/src/data/experiences/images.js";
import { Contact } from "../../components/Contact/Contact";


export const Blog = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dynamic import approach for project markdown files
  const loadProjectFile = async (projectId) => {
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
          throw new Error("Project not found");
      }
      
      return markdownModule.default;
    } catch (error) {
      console.error("Error loading project markdown:", error);
      throw error;
    }
  };

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

  // Simple frontmatter parser
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
        
        // Handle arrays (skills)
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

  // Parse date for sorting
  const parseDate = (dateString) => {
    if (!dateString) return new Date(0);
    
    // Handle various date formats
    if (dateString.includes(' - ')) {
      // For experiences like "May 2023 - Present" or "June 2024 - August 2024"
      const endDate = dateString.split(' - ')[1];
      if (endDate === 'Present') return new Date(); // Current date for "Present"
      return new Date(endDate);
    }
    
    // For projects with single dates
    return new Date(dateString);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const loadAllBlogPosts = async () => {
      try {
        // Load projects
        const projectIds = ["recycling-app", "manghost-cafe", "threat-intelligence"];
        const projectsData = await Promise.all(
          projectIds.map(async (id) => {
            try {
              const content = await loadProjectFile(id);
              const { data } = parseFrontmatter(content);
              const projectImageSrc = projectImages[data.heroImage] || null;
              return {
                id,
                type: 'project',
                title: data.title,
                description: data.description,
                imageSrc: projectImageSrc,
                skills: data.skills || [],
                date: data.date,
                parsedDate: parseDate(data.date),
                demo: data.demo || "",
                source: data.source || "",
                category: 'Project'
              };
            } catch (err) {
              console.warn(`Failed to load project ${id}:`, err);
              return null;
            }
          })
        );

        // Load experiences
        const experienceIds = ["1332", "ge-intern", "ups-intern"];
        const experiencesData = await Promise.all(
          experienceIds.map(async (id) => {
            try {
              const content = await loadExperienceFile(id);
              const { data } = parseFrontmatter(content);
              const experienceImageSrc = experienceImages[data.heroImage] || null;
              return {
                id,
                type: 'experience',
                title: data.title,
                description: `${data.role} at ${data.organisation}`,
                imageSrc: experienceImageSrc,
                skills: data.skills || [],
                date: data.date,
                parsedDate: parseDate(data.date),
                location: data.location,
                category: 'Experience'
              };
            } catch (err) {
              console.warn(`Failed to load experience ${id}:`, err);
              return null;
            }
          })
        );
        
        // Combine and sort by date (most recent first)
        const allPosts = [...projectsData, ...experiencesData]
          .filter(post => post !== null)
          .sort((a, b) => b.parsedDate - a.parsedDate);
        
        setBlogPosts(allPosts);
        setLoading(false);
      } catch (err) {
        console.error("Error loading blog posts:", err);
        setLoading(false);
      }
    };

    loadAllBlogPosts();
  }, []);

  const handlePostClick = (post) => {
    if (post.type === 'project') {
      navigate(`/blog/${post.id}`);
    } else if (post.type === 'experience') {
      navigate(`/experience/${post.id}`);
    }
  };

  if (loading) {
    return (
      <div className={styles.blog}>
        <div className={styles.blogHeader}>
          <h1>Blogs and Vlogs</h1>
          <p className={styles.subtitle}>Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
    <div className={styles.blog}>
      <div className={styles.blogHeader}>
        <h1>Blogs and Vlogs</h1>
        <p className={styles.subtitle}>
          What I've been up to!
        </p>
      </div>
      
      <div className={styles.blogContainer}>
        <div className={styles.blogList}>
          {blogPosts.map((post) => (
            <article 
              key={`${post.type}-${post.id}`}
              className={styles.blogPost}
              onClick={() => handlePostClick(post)}
            >
              <div className={styles.blogImage}>
                <img 
                  src={post.imageSrc} 
                  alt={post.title}
                />
                <div className={styles.imageOverlay}>
                  <span className={`${styles.categoryTag} ${post.type === 'project' ? styles.projectTag : styles.experienceTag}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className={styles.blogContent}>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogDescription}>{post.description}</p>
                <div className={styles.blogMeta}>
                  <time className={styles.blogDate}>{post.date}</time>
                  <div className={styles.blogTags}>
                    {post.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className={styles.tag}>{skill}</span>
                    ))}
                    {post.skills.length > 3 && (
                      <span className={styles.tag}>+{post.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
    </div>
    <Contact />
    </div>
  );
};