import React from "react";
import "./Hello.scss";
import Icon from "../../Assets/Icons/icon-mouse.svg";
import ReactRotatingText from "react-rotating-text";

const Hello = () => {
  return (
    <div className="hello">
      <div className="text-center">
        <span className="subheading" role="img" aria-label="Hello">
          👋 Eu sou
        </span>
        <h1 className="name">Augusto Scher</h1>
        <div className="rotating-text">
          <ReactRotatingText
            typingInterval={50}
            color="#FF3465"
            items={["Software Engineer", "at", "Resultados Digitais"]}
          />
        </div>
      </div>
      <div className="mouse-icon">
        <div className="mouse-wheel">
          <img src={Icon} alt="mouse" />
        </div>
      </div>
    </div>
  );
};

export default Hello;
