import ProjectBoard from './ProjectBoard';
import './GridView.css';

import mangoImg from '../assets/proj/manghost1.png';
import livethrive from '../assets/proj/livethrive3D.png';


const projects = [
  
  { title: 'Live Thrive Full-Stack Mobile Application', 
    image: livethrive, link: '/livethrive' },
  { title: 'Manghost Cafe - Unity', image: mangoImg, link: '/mango' },
  { title: 'Project 3', image: mangoImg, link: '/project3' },
  { title: 'Project 4', image: mangoImg, link: '/project4' },
  { title: 'Project 5', image: mangoImg, link: '/project5' },
  { title: 'Project 6', image: mangoImg, link: '/project6' },

];


const GridView = () => {
  return (
    <div className="grid-view">
      <div className="project-grid">
        {projects.map((p, i) => (
          <ProjectBoard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default GridView;
