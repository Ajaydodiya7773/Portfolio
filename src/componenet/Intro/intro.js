import React from "react";
import "./intro.css";
import bg from "../../assets/bg2.png";
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
          Web & Python Developer.
        </span>
        <p className="introPara">
      
          Tech Enthusiast Passionate about all things tech! 🚀 MCA PostGraduate
          student diving deep into the world of Frontend Development.
          Specializing in the dynamic MERN stack, mastering JavaScript, Python,
          and always up for a coding challenge. Eager to contribute innovative
          solutions and connect with like-minded tech enthusiasts. Let's geek
          out over the latest trends and opportunities!💡💻
        </p>
        <Link> <button className="btn" ><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire me</button></Link>

      </div>
      <img src={bg} alt="Profile" className="bg" />
    
    </section>
  );
};

export default Intro;
