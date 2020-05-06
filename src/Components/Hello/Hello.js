import React from "react";
import styled from 'styled-components';
import "./Hello.scss";
import Icon from "../../Assets/Icons/icon-mouse.svg";
import ReactRotatingText from "react-rotating-text";

const Content = styled.div`
  margin-top: 100px;
`;

const CenterDiv = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

const Name = styled.h1`
  font-size: 60px;
  font-weight: 800;
  color: var(--black);
  margin: 0;
`;

const Hello = () => {
  return (
    <Content>
      <CenterDiv>
        <span className="subheading" role="img" aria-label="Hello">
          👋 Eu sou
        </span>
        <Name>Augusto Scher</Name>
        <div className="rotating-text">
          <ReactRotatingText
            typingInterval={50}
            emptyPause={500}
            pause={1000}
            color="#FF3465"
            items={["Software Engineer", "at", "Resultados Digitais"]}
          />
        </div>
      </CenterDiv>
      <div className="mouse-icon">
        <div className="mouse-wheel">
          <img src={Icon} alt="mouse" />
        </div>
      </div>
    </Content>
  );
};

export default Hello;
