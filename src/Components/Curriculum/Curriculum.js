import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import dummyText from "../DummyText";

// import Title from "../Title/Title";

const Container = styled.div`
  border: solid;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

const LeftPanel = styled.div`
  width: 25%;
  height: 300px;
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

  &:hover {
    color: var(--primary);
  }

`

const Curriculum = () => {
  const { t } = useTranslation(["curriculum"]);

  return (
    <>
      {/* <Title title={t("curriculum:title")} /> */}
      <Container>
        <LeftPanel>
          <ul>
            <Li>
              <Link
                activeClass="active"
                to={"test1"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Interesses
              </Link>
            </Li>
            <Li>
              <Link
                activeClass="active"
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
          <div id="test1">
            <h1>Interesses</h1>
            {dummyText}
          </div>
          <div id="test2">
            <h1>Educação</h1>
            {dummyText}
          </div>
{/* 
          <Element
            name="test7"
            className="element"
            id="containerElement"
            style={{
              height: "1000px",
              overflow: "scroll",
              marginBottom: "100px",
            }}
          >
            <Element name="test1">
              <h1>Interesses</h1>
              {dummyText}
            </Element>

            <Element name="test2">
              <h1>Educação</h1>
              {dummyText}
            </Element>
          </Element> */}
        </RightPanel>
      </Container>
    </>
  );
};

export default Curriculum;
