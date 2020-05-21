import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import ListItem from './ListItem/ListItem';
import Interest from './Interest/Interest';
import ElementItem from './ElementItem/ElementItem';
import fetchProfessionalData from "../../Services/fetchProfessionalInfo";

const Container = styled.div`
  margin: 0px 10px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

const LeftPanel = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
`;

const RightPanel = styled.div`
  margin: auto;
`;

const Curriculum = () => {
  const { t } = useTranslation(["curriculum"]);
  const [professionalData, setProfessionalData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const results = await fetchProfessionalData();
      if (mounted) {
        setProfessionalData(results);
      }
    };

    getData();
    return () => {
      mounted = false;
    };
  }, []);

  if (!professionalData) {
    return <div></div>;
  }

  return (
    <>
      <Container>
        <LeftPanel>
          <ul>
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
            </ElementItem>
            <ElementItem name="education">
              <h1>{t("curriculum:education")}</h1>
              {professionalData.map((prof, idx) => (
                <div id={idx}>
                  {prof.graduations.map((grad, id) => (
                    <p id={id}>{grad.name}</p>
                  ))}
                </div>
              ))}
            </ElementItem>
            <ElementItem name="experience">
              <h1>{t("curriculum:experience")}</h1>
              {professionalData.map((prof, idx) => (
                <div id={idx}>
                  {prof.experiences.map((grad, id) => (
                    <p id={id}>{grad.name}</p>
                  ))}
                </div>
              ))}
            </ElementItem>
            <ElementItem name="licenses">
              <h1>{t("curriculum:licenses")}</h1>
              {professionalData.map((prof, idx) => (
                <div id={idx}>
                  {prof.licenses.map((grad, id) => (
                    <p id={id}>{grad.name}</p>
                  ))}
                </div>
              ))}
            </ElementItem>
          </Element>
        </RightPanel>
      </Container>
    </>
  );
};

export default Curriculum;
