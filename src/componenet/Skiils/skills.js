import React from 'react';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import './skills.css';

const Skills = () => {
  return (
   <section className="Skills">
<span className="skillTitle">What I Do</span> <br/>
<span className="skillDesc">Proficient in HTML, CSS, and JavaScript.
Familiar with modern frontend frameworks like React.js .
Skilled in responsive web design principles.
Knowledgeable about version control systems such as Git.
Comfortable working with UI/UX design principles.
Able to troubleshoot and debug frontend issues efficiently.
Enthusiastic learner and adaptable team player.
Strong attention to detail in implementing designs.
Passionate about creating intuitive user interfaces.
Eager to contribute to projects and collaborate with cross-functional teams.</span>
<div className="skillBars">
    <div className="skillBar">
        <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
        <div className='skillBarText'>
        <h2>UI/UX Design</h2>
        <p>Design website </p>
        </div>
      
    </div>
    <div className="skillBar">
        <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
        <div className='skillBarText'>
        <h2>Web Developer</h2>
        <p>Frontend Developer</p>
        </div>
       
    </div>
</div>
   </section>

  );
}

export default Skills;
