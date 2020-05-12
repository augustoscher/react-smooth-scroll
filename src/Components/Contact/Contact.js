import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import cardItems from './cardItems';
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

const renderCards = (item, id) => <Card key={id} icon={item.icon} link={item.src} label={item.label} />

const Contact = () => {
  const { t } = useTranslation(["contact"]);

  return (
    <div className="container">
      <Content>
        <Title title={t("contact:title")} />
      </Content>
      <div className="row d-flex contact-info mb-5">
        {cardItems.map((item, idx)=> renderCards(item, idx))}
      </div>
    </div>
  );
};

export default Contact;
