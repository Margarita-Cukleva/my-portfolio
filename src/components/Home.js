import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  const navigate = useNavigate();
  const img = require("./letterM.jpg");

  return (
    <div className="backgroundClass">
      <img src={img} alt="img" className="wallpaper imgPosition" />

      <div className="styledText">
        <h6 style={{ fontSize: "50px" }}>
          <ReactTypingEffect
            text={["Hi"]}
            speed={100}
            eraseDelay={700}
          ></ReactTypingEffect>
          , my
        </h6>
        <h6
          style={{
            fontSize: "50px",
          }}
        >
          name is <b className="textGradient">Margarita</b>
        </h6>
      </div>
      <span className="spanStyle">
        I' am a Frontend Developer from Gevgelija, Macedonia.
      </span>
      <div className="btnStyle">
        <button
          className="gradient-button-1 gradient-button"
          onClick={() => navigate("/contact")}
        >
          Contact me
        </button>
      </div>
    </div>
  );
};
export default Home;
