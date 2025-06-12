import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { BlogPost } from "./pages/BlogPost/BlogPost";
import { Resume } from "./pages/Resume/Resume";
import { ExperiencePost } from './pages/ExperiencePost/ExperiencePost'; 

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/experience/:experienceId" element={<ExperiencePost />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;