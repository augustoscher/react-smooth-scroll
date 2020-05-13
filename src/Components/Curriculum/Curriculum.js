import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import dummyText from "../DummyText";

import Title from "../Title/Title";

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

const Curriculum = () => {
  const { t } = useTranslation(["curriculum"]);

  return (
    <>
      {/* <Title title={t("curriculum:title")} /> */}
      <Container>
        <LeftPanel>
          <ul>
            <li className="nav-item">
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
            </li>
            <li>
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
            </li>
            <li>Experiência</li>
            <li>Certificados e Licenças</li>
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
        </RightPanel>
      </Container>
    </>
  );
};

export default Curriculum;
