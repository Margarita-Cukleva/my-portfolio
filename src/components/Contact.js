import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="backgroundClassContact">
      <p className="contactMe">Contact Me</p>
      <div className="social_links">
        <a
          rel="noreferrer"
          href="mailto:cukleva.m@hotmail.com?Subject=Some%20subject"
          target="_blank"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/margarita-cukleva-0a8736188/"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/cukleva.m"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/cuklevam/"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};
export default Contact;
