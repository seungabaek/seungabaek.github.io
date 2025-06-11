import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";
import { getImageUrl } from "../../utils";

export const Blog = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dynamic import approach for markdown files
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
          throw new Error("Project not found");
      }
      
      return markdownModule.default;
    } catch (error) {
      console.error("Error loading markdown:", error);
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

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const loadAllProjects = async () => {
      const projectIds = ["recycling-app", "manghost-cafe", "threat-intelligence"];
      
      try {
        const projectsData = await Promise.all(
          projectIds.map(async (id) => {
            try {
              const content = await loadMarkdownFile(id);
              const { data } = parseFrontmatter(content);
              return {
                id,
                title: data.title,
                description: data.description,
                imageSrc: data.heroImage,
                skills: data.skills || [],
                date: data.date,
                demo: data.demo || "",
                source: data.source || ""
              };
            } catch (err) {
              console.warn(`Failed to load project ${id}:`, err);
              return null;
            }
          })
        );
        
        setProjects(projectsData.filter(p => p !== null));
        setLoading(false);
      } catch (err) {
        console.error("Error loading projects:", err);
        setLoading(false);
      }
    };

    loadAllProjects();
  }, []);

  const handlePostClick = (projectId) => {
    navigate(`/blog/${projectId}`);
  };

  if (loading) {
    return (
      <div className={styles.blog}>
        <div className={styles.blogHeader}>
          <h1>Blogs and Vlogs</h1>
          <p className={styles.subtitle}>Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blog}>
      <div className={styles.blogHeader}>
        <h1>Blogs and Vlogs</h1>
        <p className={styles.subtitle}>
          What I've been up to!
        </p>
      </div>
      
      <div className={styles.blogContainer}>
        <div className={styles.blogList}>
          {projects.map((project) => (
            <article 
              key={project.id}
              className={styles.blogPost}
              onClick={() => handlePostClick(project.id)}
            >
              <div className={styles.blogImage}>
                <img 
                  src={getImageUrl(project.imageSrc)} 
                  alt={project.title}
                />
              </div>
              <div className={styles.blogContent}>
                <h2 className={styles.blogTitle}>{project.title}</h2>
                <p className={styles.blogDescription}>{project.description}</p>
                <div className={styles.blogMeta}>
                  <time className={styles.blogDate}>{project.date}</time>
                  <div className={styles.blogTags}>
                    {project.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className={styles.tag}>{skill}</span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className={styles.tag}>+{project.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};