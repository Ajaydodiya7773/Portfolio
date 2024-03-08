import React from "react";
import "../Projects/project.css";
import portfolio1 from "../../../assets/portfolio-1.png";
import portfolio2 from "../../../assets/portfolio-2.png";
import portfolio3 from "../../../assets/portfolio-3.png";
import portfolio4 from "../../../assets/portfolio-4.png";
import portfolio5 from "../../../assets/portfolio-5.png";
import portfolio6 from "../../../assets/portfolio-6.png";
const Project = () => {
  return (
    <section id="works">
      <h1 className="heading">Projects</h1>
      <span >
        <h3 className="ProjectDetails">MovieMagnet</h3>
          <p>
            I have developed a movie exploration website utilizing React for the
            frontend, CSS for styling, and integrated IMDb's API to fetch movie
            data. My website likely allows users to search for movies, view
            details about them, and possibly even watch trailers or read
            reviews. The website provides users with an interactive and
            user-friendly interface to discover information about various
            movies, including details such as cast members, ratings, genres,
            release dates, and more. By leveraging IMDb's API, users can access
            a vast database of movies and related information, enhancing their
            movie exploration experience.
          </p>
     
      </span>

      <h3 className="title">My Portfolio</h3>
      <span className="Description">
        I take pride in paying attention to the smallest details,
        <br /> In my portfolio all about my Eduction and projects i build in my
        tech journy and in college,
        <br /> I learn lot to make my project and make mistakes and improve it.
      </span>
      <div className="images">
        <img src={portfolio1} className="work" alt="img"></img>
        <img src={portfolio2} className="work" alt="img"></img>
        <img src={portfolio3} className="work" alt="img"></img>
        <img src={portfolio4} className="work" alt="img"></img>
        <img src={portfolio5} className="work" alt="img"></img>
        <img src={portfolio6} className="work" alt="img"></img>
      </div>
    </section>
  );
};

export default Project;
