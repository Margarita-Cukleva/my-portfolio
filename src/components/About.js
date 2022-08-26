import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="backgroundClassAbout">
      <p className="paragraphStyle" style={{ width: "550px" }}>
        I' am a person who like to grow up and build your own career and
        success. I really like design and creativity, so my choice is to be
        expirienced and successfull Frontend Developer.
      </p>
      <p className="pStyle" style={{ width: "550px" }}>
        I look for opportunity for work and I hope you will like my portfolio.
      </p>

      <p className="AboutTextGradient">
        <b>My Hobbies:</b>
      </p>
      <ul className="pStyle">
        <li>
          <i class="bi bi-check2-square"></i> Traveling
        </li>
        <li>
          <i class="bi bi-check2-square"></i> Reading Books
        </li>
        <li>
          <i class="bi bi-check2-square"></i> Hiking
        </li>
        <li>
          <i class="bi bi-check2-square"></i> Listening music
        </li>
      </ul>
    </div>
  );
};
export default About;
