import './ProjectBoard.css';

const ProjectBoard = ({ title, image, link }) => {
  return (
    <a href={link} className="project-tile">
      <img src={image} alt={title} />
      <div className="overlay">
        <span className="project-title">{title}</span>
      </div>
    </a>
  );
};

export default ProjectBoard;
