import React from "react";
import "./intro.css";
import bg from "../Intro/BG.png";
import { Link } from "react-scroll";
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Ajay Singh</span>
          <br />
          Frontend Developer.
        </span>
        <p className="introPara">
          Certainly! If you prefer a more concise and catchy headline
          emphasizing your enthusiasm for technology, you can go with: Headline:
          "Tech Enthusiast | MCA Student | Frontend Developer | MERN Stack |
          JavaScript | Python" Bio: Passionate about all things tech! 🚀 MCA
          student diving deep into the world of Frontend Development.
          Specializing in the dynamic MERN stack, mastering JavaScript, Python,
          and always up for a coding challenge. Eager to contribute innovative
          solutions and connect with like-minded tech enthusiasts. Let's geek
          out over the latest trends and opportunities! 💡💻 #TechEnthusiast
          #MERNStack #FrontendDev
        </p>
        <Link> <button className="btn"/><img src={btnImg} alt="Hire Me"/></Link>

      </div>
      <span>  <img src={bg} alt="Profile" className="bg" /></span>
    
    </section>
  );
};

export default Intro;
