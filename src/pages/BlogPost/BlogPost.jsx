import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./BlogPost.module.css";
import { getImageUrl } from "../../utils";
import projectsData from "../../data/projects.json";

export const BlogPost = () => {
  const { postId } = useParams();
  const project = projectsData.find(p => p.id === postId);
  
  // Get other projects for related posts
  const relatedProjects = projectsData.filter(p => p.id !== postId);

  if (!project) {
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

  // Helper function to render content sections
  const renderContent = (content) => {
    switch (project.id) {
      case "recycling-app":
        return renderRecyclingAppContent(content);
      case "manghost-cafe":
        return renderManghostCafeContent(content);
      case "threat-intelligence":
        return renderThreatIntelligenceContent(content);
      default:
        return null;
    }
  };

  // Live Thrive
  const renderRecyclingAppContent = (content) => (
    <>
      <p>{content.overview}</p>
      
      {/* Team Section */}
      {content.teamAndRoles && (
        <>
          <h2>Team & Contributions</h2>
          <p>{content.teamAndRoles.description}</p>
          <ul>
            {content.teamAndRoles.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </>
      )}
      
      <h2>The Problem</h2>
      <ul>
        {content.problem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {/* System Architecture */}
      {content.systemArchitecture && (
        <>
          <h2>System Architecture</h2>
          <p>{content.systemArchitecture.description}</p>
          <ul>
            {content.systemArchitecture.components.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
        </>
      )}
      
      <h2>Design Process</h2>
      <p>{content.designProcess.description}</p>
      <ul>
        {content.designProcess.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      
      <h2>Technical Implementation</h2>
      
      <h3>{content.technicalImplementation.frontend.title}</h3>
      <ul>
        {content.technicalImplementation.frontend.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      
      <h3>{content.technicalImplementation.api.title}</h3>
      <ul>
        {content.technicalImplementation.api.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      
      <h3>{content.technicalImplementation.database.title}</h3>
      <ul>
        {content.technicalImplementation.database.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      
      <h2>Key Features Implemented</h2>
      {content.keyFeatures.map((feature, index) => (
        <div key={index} className={styles.feature}>
          <h4>{feature.name}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
      
      {/* UI/UX Highlights */}
      {content.uiUxHighlights && (
        <>
          <h2>UI/UX Highlights</h2>
          <ul>
            {content.uiUxHighlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </>
      )}
      
      {/* Security Measures */}
      {content.securityMeasures && (
        <>
          <h2>Security Measures</h2>
          <ul>
            {content.securityMeasures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </>
      )}
      
      {/* Development Challenges */}
      {content.challenges && (
        <>
          <h2>Development Challenges</h2>
          <ul>
            {content.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </>
      )}
      
      <h2>Future Enhancements</h2>
      <ul>
        {content.futureEnhancements.map((enhancement, index) => (
          <li key={index}>{enhancement}</li>
        ))}
      </ul>
      
      {/* Impact - now a string instead of array */}
      {content.impact && (
        <>
          <h2>Impact</h2>
          <p>{content.impact}</p>
        </>
      )}
      
      <h2>Lessons Learned</h2>
      <p>{content.lessonsLearned}</p>
    </>
  );
  // Unity Manghost Cafe
  const renderManghostCafeContent = (content) => (
    <>
      <p>{content.overview}</p>
      
      <h2>Game Concept</h2>
      <p>{content.gameDesign.concept}</p>
      <p>{content.gameDesign.coreGameplay}</p>
      
      <h2>Technical Architecture</h2>
      
      <h3>State Machine Implementation</h3>
      <p>{content.technicalImplementation.stateMachine.description}:</p>
      <ul>
        {content.technicalImplementation.stateMachine.states.map((state, index) => (
          <li key={index}>{state}</li>
        ))}
      </ul>
      
      <h3>AI Customer Behavior</h3>
      <p>{content.technicalImplementation.aiCustomers.description}:</p>
      <ul>
        {content.technicalImplementation.aiCustomers.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      
      
      <h2>Game Mechanics</h2>
      <h3>Order System</h3>
      <ul>
        {content.gameMechanics.orderSystem.map((mechanic, index) => (
          <li key={index}>{mechanic}</li>
        ))}
      </ul>
      
      <h3>Interactive UI Elements</h3>
      <ul>
        {content.gameMechanics.uiElements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      
      <h2>Performance Optimization</h2>
      <ul>
        {content.optimization.map((opt, index) => (
          <li key={index}>{opt}</li>
        ))}
      </ul>
      
      <h2>Art Style and Audio</h2>
      <h3>Visual Style</h3>
      <ul>
        {content.artAndAudio.visualStyle.map((style, index) => (
          <li key={index}>{style}</li>
        ))}
      </ul>
      <h3>Audio Design</h3>
      <ul>
        {content.artAndAudio.audio.map((audio, index) => (
          <li key={index}>{audio}</li>
        ))}
      </ul>
      
      <h2>Level Design</h2>
      {content.levels.map((level, index) => (
        <div key={index} className={styles.level}>
          <h4>{level.name}</h4>
          <p>{level.description}</p>
        </div>
      ))}
      
      <h2>Player Progression</h2>
      <ul>
        {content.progression.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h2>Development Challenges</h2>
      <ul>
        {content.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
      
      <h2>Future Updates</h2>
      <ul>
        {content.futureUpdates.map((update, index) => (
          <li key={index}>{update}</li>
        ))}
      </ul>
    </>
  );

  // Render function for Threat Intelligence
  const renderThreatIntelligenceContent = (content) => (
    <>
      <p>{content.overview}</p>
      
      <h2>The Problem with Centralized Systems</h2>
      <ul>
        {content.problemStatement.centralizedIssues.map((issue, index) => (
          <li key={index}>{issue}</li>
        ))}
      </ul>
      
      <h2>Improving Upon IRIS</h2>
      <p>This project builds upon the existing IRIS framework with key improvements:</p>
      <ul>
        {content.problemStatement.irisImprovements.map((improvement, index) => (
          <li key={index}>{improvement}</li>
        ))}
      </ul>
      
      <h2>System Architecture</h2>
      
      <h3>Core Components</h3>
      <p>{content.architecture.coreComponents.description}:</p>
      <ul>
        {content.architecture.coreComponents.components.map((component, index) => (
          <li key={index}>{component}</li>
        ))}
      </ul>
      
      <h3>Peer-to-Peer Network Layer</h3>
      <p>{content.architecture.networkLayer.description}:</p>
      <ul>
        {content.architecture.networkLayer.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      
      <h2>Technical Details</h2>
      
      <h3>Metadata Chunking Algorithm</h3>
      <p>{content.technicalDetails.chunkingAlgorithm.description}:</p>
      <ul>
        {content.technicalDetails.chunkingAlgorithm.process.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      
      <h3>Custom JSON-RPC Protocol</h3>
      <p>{content.technicalDetails.protocol.description}:</p>
      <ul>
        {content.technicalDetails.protocol.messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      
      <h3>Intelligent Chunk Distribution</h3>
      <h4>Rarity-First Distribution</h4>
      <ul>
        {content.technicalDetails.distribution.rarityFirst.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h4>Adaptive Replication</h4>
      <ul>
        {content.technicalDetails.distribution.adaptiveReplication.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h2>Security Measures</h2>
      
      <h3>Data Integrity</h3>
      <ul>
        {content.security.dataIntegrity.map((measure, index) => (
          <li key={index}>{measure}</li>
        ))}
      </ul>
      
      <h3>Privacy Protection</h3>
      <ul>
        {content.security.privacy.map((protection, index) => (
          <li key={index}>{protection}</li>
        ))}
      </ul>
      
      <h2>Docker Deployment</h2>
      <p>{content.deployment.docker.description}</p>
      <ul>
        {content.deployment.docker.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      
      <h2>Performance Optimization</h2>
      
      <h3>Caching Strategy</h3>
      <ul>
        {content.performance.caching.map((strategy, index) => (
          <li key={index}>{strategy}</li>
        ))}
      </ul>
      
      <h3>Bandwidth Management</h3>
      <ul>
        {content.performance.bandwidth.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h3>Performance Metrics</h3>
      <ul>
        {content.performance.metrics.map((metric, index) => (
          <li key={index}>{metric}</li>
        ))}
      </ul>
      
      <h2>Real-World Applications</h2>
      <ul>
        {content.applications.map((app, index) => (
          <li key={index}>{app}</li>
        ))}
      </ul>
      
      <h2>Future Enhancements</h2>
      <ul>
        {content.futureWork.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
    </>
  );

  return (
    <div className={styles.blogPost}>
      <div className={styles.container}>
        <Link to="/blog" className={styles.backLink}>← Back to Projects</Link>
        
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.metadata}>
              <time className={styles.date}>{project.date}</time>
              <div className={styles.tags}>
                {project.skills.map((skill, index) => (
                  <span key={index} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          </header>
          
          <div className={styles.featuredImage}>
            <img src={getImageUrl(project.imageSrc)} alt={project.title} />
          </div>
          
          <div className={styles.content}>
            {renderContent(project.content)}
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
          {relatedProjects.length > 0 && (
            <div className={styles.readMoreSection}>
              <h2>Other Projects</h2>
              <div className={styles.relatedPosts}>
                {relatedProjects.map((relatedProject) => (
                  <Link 
                    key={relatedProject.id}
                    to={`/blog/${relatedProject.id}`}
                    className={styles.relatedPost}
                  >
                    <div className={styles.relatedImage}>
                      <img 
                        src={getImageUrl(relatedProject.imageSrc)} 
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