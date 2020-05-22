import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import ListItem from './ListItem/ListItem';
import ElementItem from './ElementItem/ElementItem';
import Interest from './Interest/Interest';
import Education from './Education/Education';
import fetchProfessionalData from "../../Services/fetchProfessionalInfo";

const Container = styled.div`
  margin-left: 10px;
  margin-right: 0px;
  height: 100%;
`;

const LeftPanel = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
`;

const RightPanel = styled.div`
  margin: auto;
  padding-right: 0px;
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
      <Container className="row">
        <LeftPanel className="col-xs-6 col-md-3">
          <ul>
            <ListItem tittle={t("curriculum:interests")} to="interest" />
            <ListItem tittle={t("curriculum:education")} to="education" />
            <ListItem tittle={t("curriculum:experience")} to="experience" />
            <ListItem tittle={t("curriculum:licenses")} to="licenses" />
          </ul>
        </LeftPanel>
        <RightPanel className="col-xs-12 col-md-9">
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
              <Education title={t("curriculum:education")} professionalData={professionalData} />
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
