import React from 'react';
import './App.css';

import Intro from './componenet/Intro/intro';
import Navbar from './componenet/NavBar/navbar';
import Skills from './componenet/Skiils/skills';



function App() {
  return (
    <div className="App">
<Navbar/>
<Intro/>
<Skills/>

    </div>
  );
}

export default App;
