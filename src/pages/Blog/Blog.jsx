import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";
import { getImageUrl } from "../../utils";
import projectsData from "../../data/projects.json";

export const Blog = () => {
  const navigate = useNavigate();

  const handlePostClick = (projectId) => {
    navigate(`/blog/${projectId}`);
  };

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
          {projectsData.map((project) => (
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