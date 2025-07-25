import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./BlogPost.module.css";
import { projectImages } from "/src/data/projects/images.js";

export const BlogPost = () => {
  const { postId } = useParams();
  const [project, setProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dynamic import approach for markdown files
  const loadMarkdownFile = async (postId) => {
    try {
      let markdownModule;
      
      // Dynamic import based on project ID
      switch (postId) {
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
        
        // Handle arrays (skills and additionalImages)
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

  // Simple markdown renderer
  const renderMarkdown = (content) => {
    return content.split('\n').map((line, index) => {
      const trimmed = line.trim();

      // Horizontal rules (--- becomes a border line)
      if (trimmed === '---') {
        console.log('Found horizontal rule, creating HR element'); // Debug log
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

      // Skip empty lines (this reduces excessive spacing)
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
    }).filter(element => element !== null); // Remove null elements (empty lines)
  };

  useEffect(() => {
    // Scroll to top when component mounts or postId changes
    window.scrollTo(0, 0);

    const loadProject = async () => {
      try {
        // Load markdown content using dynamic import
        const markdownContent = await loadMarkdownFile(postId);
        
        // Parse frontmatter and content
        const { data: frontmatter, content } = parseFrontmatter(markdownContent);
        
        // Get the hero image(s) from the imported images
        const heroImageSrc = projectImages[frontmatter.heroImage] || null;
        
        // Handle multiple hero images
        const heroImagesSrc = [];
        if (frontmatter.heroImages && Array.isArray(frontmatter.heroImages)) {
          frontmatter.heroImages.forEach(imageKey => {
            const imageSrc = projectImages[imageKey];
            if (imageSrc) {
              heroImagesSrc.push(imageSrc);
            }
          });
        }
        
        // Handle multiple additional images
        const additionalImagesSrc = [];
        if (frontmatter.additionalImages && Array.isArray(frontmatter.additionalImages)) {
          frontmatter.additionalImages.forEach(imageKey => {
            const imageSrc = projectImages[imageKey];
            if (imageSrc) {
              additionalImagesSrc.push(imageSrc);
            }
          });
        }
        
        // Create project object with frontmatter data
        const projectData = {
          id: postId,
          title: frontmatter.title || `Project: ${postId}`,
          description: frontmatter.description || "No description available",
          imageSrc: heroImageSrc, // Use the loaded image instead of the path
          heroImages: heroImagesSrc, // Multiple hero images
          additionalImages: additionalImagesSrc,
          skills: frontmatter.skills || [],
          date: frontmatter.date,
          demo: frontmatter.demo || "",
          source: frontmatter.source || "",
          content: content
        };

        setProject(projectData);
        
        // Load other projects for related posts
        const otherProjectIds = ["recycling-app", "manghost-cafe", "threat-intelligence"].filter(id => id !== postId);
        const otherProjects = await Promise.all(
          otherProjectIds.map(async (id) => {
            try {
              const content = await loadMarkdownFile(id);
              const { data } = parseFrontmatter(content);
              const relatedImageSrc = projectImages[data.heroImage] || null;
              return {
                id,
                title: data.title,
                description: data.description,
                imageSrc: relatedImageSrc, // Use the loaded image instead of the path
                date: data.date
              };
            } catch (err) {
              console.warn(`Failed to load project ${id}:`, err);
              return null;
            }
          })
        );
        
        setAllProjects(otherProjects.filter(p => p !== null));
        setLoading(false);
      } catch (err) {
        console.error("Error loading project:", err);
        setError("Failed to load project: " + err.message);
        setLoading(false);
      }
    };

    loadProject();
  }, [postId]);

  if (loading) {
    return (
      <div className={styles.blogPost}>
        <div className={styles.container}>
          <div className={styles.loading}>
            <h2>Loading project...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className={styles.blogPost}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/blog" className={styles.backLink}>← Back to Projects</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogPost}>
      <div className={styles.container}>
        <Link to="/blog" className={styles.backLink}>← Back to Projects</Link>
        
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
            {project.skills && project.skills.length > 0 && (
              <div className={styles.metadata}>
                <time className={styles.date}>{project.date}</time>
                <div className={styles.tags}>
                  {project.skills.map((skill, index) => (
                    <span key={index} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </header>
          
          {/* Hero Image(s) */}
          {project.heroImages && project.heroImages.length > 0 ? (
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              margin: '30px 0'
            }}>
              {project.heroImages.map((imageSrc, index) => (
                <div key={index} className={styles.featuredImage} style={{
                  margin: '0',
                  flex: '1',
                  maxWidth: '45%',
                  minWidth: '300px'
                }}>
                  <img src={imageSrc} alt={`${project.title} ${index + 1}`} />
                </div>
              ))}
            </div>
          ) : project.imageSrc ? (
            <div className={styles.featuredImage}>
              <img src={project.imageSrc} alt={project.title} />
            </div>
          ) : null}
          
          <div className={styles.content}>
            <div className={styles.markdownContent}>
              {(() => {
                const lines = project.content.split('\n');
                
                // Handle different split points for different projects
                let splitIndex = -1;
                let splitText = '';
                
                if (project.id === 'manghost-cafe') {
                  splitIndex = lines.findIndex(line => line.includes('Game Concept & Mechanics'));
                  splitText = 'Game Concept & Mechanics';
                } else if (project.id === 'recycling-app') {
                  splitIndex = lines.findIndex(line => line.includes('Team & Contributions'));
                  splitText = 'Team & Contributions';
                } else if (project.id == 'threat-intelligence') {
                  splitIndex = lines.findIndex(line => line.includes('Our Solution: Enhanced Iris Framework'));
                  splitText = 'Our Solution: Enhanced Iris Framework';
                }
                
                if (splitIndex !== -1 && project.additionalImages && project.additionalImages.length > 0) {
                  const beforeImage = lines.slice(0, splitIndex).join('\n');
                  const afterImage = lines.slice(splitIndex).join('\n');
                  
                  return (
                    <>
                      {renderMarkdown(beforeImage)}
                      <div style={{ 
                        margin: '40px auto',
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                      }}>
                        {project.additionalImages.map((imageSrc, index) => (
                          <div key={index} className={styles.featuredImage} style={{ 
                            margin: '0',
                            flex: '1',
                            maxWidth: project.additionalImages.length === 1 ? '80%' : '45%',
                            minWidth: '300px'
                          }}>
                            <img src={imageSrc} alt={`${project.title} Image ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                      {renderMarkdown(afterImage)}
                    </>
                  );
                } else {
                  return renderMarkdown(project.content);
                }
              })()}
            </div>
          </div>

          {/* Project Links */}
          <div className={styles.projectLinks}>
            <h3>Project Links</h3>
            <div className={styles.linkButtons}>
              {project.source && (
                <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  View on GitHub
                </a>
              )}
              {project.demo && project.demo !== "" ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  Live Demo
                </a>
              ) : (
                <span className={styles.linkButtonDisabled}>Demo Coming Soon</span>
              )}
            </div>
          </div>

          {/* Contact Box */}
          <div className={styles.contactBox}>
            <p>
              Interested in this project? I'd love to discuss it!{' '}
              <Link to="/resume" className={styles.contactLink}>
                View My Resume
              </Link>
              {' '}or{' '}
              <a href="mailto:seungabaek@gatech.edu" className={styles.contactLink}>
                send me an email
              </a>
            </p>
          </div>

          {/* Other Projects */}
          {allProjects.length > 0 && (
            <div className={styles.readMoreSection}>
              <h2>Other Projects</h2>
              <div className={styles.relatedPosts}>
                {allProjects.map((relatedProject) => (
                  <Link 
                    key={relatedProject.id}
                    to={`/blog/${relatedProject.id}`}
                    className={styles.relatedPost}
                  >
                    <div className={styles.relatedImage}>
                      <img 
                        src={relatedProject.imageSrc} 
                        alt={relatedProject.title}
                      />
                    </div>
                    <div className={styles.relatedContent}>
                      <h3>{relatedProject.title}</h3>
                      <p>{relatedProject.description}</p>
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