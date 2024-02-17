import React from 'react';
import './App.css';

import Intro from './componenet/Intro/intro';
import Navbar from './componenet/NavBar/navbar';
import Skills from './componenet/Skiils/skills';
import Project from './componenet/Intro/Projects/project';


function App() {
  return (
    <div className="App">
<Navbar/>
<Intro/>
<Skills/>
<Project/>
    </div>
  );
}

export default App;
