import React from "react";
import styled from "styled-components";
import ListItem from './ListItem/ListItem';
import Interest from './Interest/Interest';
import ElementItem from './ElementItem/ElementItem';
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import dummyText from "../DummyText";

const Container = styled.div`
  margin: 0px 10px;
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

const Curriculum = () => {
  const { t } = useTranslation(["curriculum"]);

  return (
    <>
      <Container>
        <LeftPanel>
          <ul style={{ padding: 0, minWidth: 250 }}>
            <ListItem tittle={t("curriculum:interests")} to="interest" />
            <ListItem tittle={t("curriculum:education")} to="education" />
            <ListItem tittle={t("curriculum:experience")} to="experience" />
            <ListItem tittle={t("curriculum:licenses")} to="licenses" />
          </ul>
        </LeftPanel>
        <RightPanel>
          <Element 
            name="containerElement"
            className="element containerContent"
            id="containerElement"
            style={{
              position: "relative",
              height: "600px",
              overflow: "auto",
              // webkitScrollbar: {
              //   width: 0,
              //   background: 'transparent',
              // }
            }}
          >
            <ElementItem name="interest">
              <Interest title={t("curriculum:interests")} />
              {/* <h1>{t("curriculum:interests")}</h1> */}
              {/* {dummyText} */}
            </ElementItem>
            <ElementItem name="education">
              <h1>{t("curriculum:education")}</h1>
              {dummyText}
            </ElementItem>
            <ElementItem name="experience">
              <h1>{t("curriculum:experience")}</h1>
              <p>Oi</p>
              <p>Oi</p>
            </ElementItem>
            <ElementItem name="licenses">
              <h1>{t("curriculum:licenses")}</h1>
              <p>Oi</p>
              <p>Oi</p>
            </ElementItem>
          </Element>
        </RightPanel>
      </Container>
    </>
  );
};

export default Curriculum;
