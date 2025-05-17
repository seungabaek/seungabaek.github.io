import './Projects.css'; 

const projects = [
  { title: 'Project 1', img: '/img1.jpg' },
  { title: 'Project 2', img: '/img2.jpg' },
  { title: 'Project 3', img: '/img3.jpg' },
  { title: 'Project 4', img: '/img4.jpg' },
  { title: 'Project 5', img: '/img5.jpg' },
  { title: 'Project 6', img: '/img6.jpg' },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-tile">
            <img src={proj.img} alt={proj.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
