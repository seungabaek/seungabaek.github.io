import React, { useState } from 'react';
import PixelIntro from './components/PixelIntro';
import TopNav from './components/TopNav';
import Me from './components/Me';
import Projects from './components/GridView';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <PixelIntro onFinish={() => setShowIntro(false)} />
      ) : (
        <div className="app-container">
          <TopNav />
          <main className="main-content">
            <Me />
            <Projects />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
