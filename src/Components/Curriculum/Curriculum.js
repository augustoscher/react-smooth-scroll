import React from "react";
import { Link, Element } from "react-scroll";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import dummyText from "../DummyText";

// import Title from "../Title/Title";

const Container = styled.div`
  margin: 0px 30px;
  // border: solid;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

const LeftPanel = styled.div`
  width: 35%;
  margin: 10px;
  padding-top: 40px;
`;

const RightPanel = styled.div`
  margin: auto;
`;

const Li = styled.li`
  list-style: none;
  color: var(--black);
  font-weight: 800;
  font-size: 18px;
  opacity: 1!important;
  margin-bottom: 5px;

  &:hover {
    color: var(--primary);
  }

  .active {
    color: var(--primary);
  }
`;

const Curriculum = () => {
  const { t } = useTranslation(["curriculum"]);

  return (
    <>
      <Container>
        <LeftPanel>
          <ul style={{ padding: 0, minWidth: 250 }}>
            <Li>
              <Link
                activeClass="active"
                containerId="containerElement"
                to={"test1"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {t("curriculum:interests")}
              </Link>
            </Li>
            <Li>
              <Link
                activeClass="active"
                containerId="containerElement"
                to={"test2"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Educação
              </Link>
            </Li>
            <Li>Experiência</Li>
            <Li>Certificados e Licenças</Li>
          </ul>
        </LeftPanel>
        <RightPanel>
          <Element
            name="containerElement"
            className="element"
            id="containerElement"
            style={{
              position: "relative",
              height: "600px",
              overflow: "scroll",
            }}>
            <Element name="test1" style={{ marginTop: 40 }}>
              <h1>{t("curriculum:interests")}</h1>
              {dummyText}
            </Element>
            <Element name="test2" style={{ marginTop: 40 }}>
              <h1>Educação</h1>
              {dummyText}
            </Element>
            <Element name="test3" style={{ marginTop: 40 }}>
              <h1>Experiência</h1>
              <p>Oi</p>
              <p>Oi</p>
            </Element>
            <Element name="test4" style={{ marginTop: 40 }}>
              <h1>Certificados</h1>
              <p>Oi</p>
              <p>Oi</p>
            </Element>
          </Element>
        </RightPanel>
      </Container>
    </>
  );
};

export default Curriculum;
