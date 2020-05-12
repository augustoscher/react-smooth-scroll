import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import github from "../../Assets/Icons/icon-github.svg";
import linkedin from "../../Assets/Icons/icon-linkedin.svg";
import facebook from "../../Assets/Icons/icon-facebook.svg";
import twitter from "../../Assets/Icons/icon-twitter.svg";

import Title from "../Title/Title";
import Card from "./Card/Card";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 100px;
`;

const Contact = () => {
  const { t } = useTranslation(["contact"]);

  return (
    <div className="container">
      <Content>
        <Title title={t("contact:title")} />
      </Content>
      <div className="row d-flex contact-info mb-5">
        <Card icon={github} label="@augustoscher" />
        <Card icon={linkedin} label="@augusto-scher" />
        <Card icon={facebook} label="@augusto.scher" />
        <Card icon={twitter} label="@augustoschergm1" />
      </div>
    </div>
  );
};

export default Contact;
