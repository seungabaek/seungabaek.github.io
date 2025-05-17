//Navigation Bar

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', position: 'sticky', top: 0, background: 'white', zIndex: 10 }}>
      <a href="#about" style={{ marginRight: 20 }}>About</a>
      <a href="#projects" style={{ marginRight: 20 }}>Projects</a>
      <a href="#resume">Resume</a>
    </nav>
  );
};

export default Navbar;
