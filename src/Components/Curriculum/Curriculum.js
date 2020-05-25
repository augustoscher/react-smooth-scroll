import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import ListItem from './Base/ListItem/ListItem';
import ElementItem from './Base/ElementItem/ElementItem';
import Interest from './Interest/Interest';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import License from './License/License';
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

const ElementStyle = {
  position: "relative",
  height: "650px",
  overflow: "auto",
  paddingTop: "30px"
  // webkitScrollbar: {
  //   width: 0,
  //   background: 'transparent',
  // }
}

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
            className="containerContent"
            id="containerElement"
            style={ElementStyle}>
            <ElementItem name="interest">
              <Interest title={t("curriculum:interests")} message={t("curriculum:interested_subjects")} />
            </ElementItem>
            <ElementItem name="education">
              <Education title={t("curriculum:education")} graduations={professionalData[0].graduations} />
            </ElementItem>
            <ElementItem name="experience">
              <Experience title={t("curriculum:experience")} experiences={professionalData[0].experiences} />
            </ElementItem>
            <ElementItem name="licenses">
              <License title={t("curriculum:licenses")} licenses={professionalData[0].licenses}/>
            </ElementItem>
          </Element>
        </RightPanel>
      </Container>
    </>
  );
};

export default Curriculum;
