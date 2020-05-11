import React from "react";
import { useTranslation } from 'react-i18next';
import dummyText from "../DummyText";

import Title from '../Title/Title';

const Curriculum = () => {
  const { t } = useTranslation(['curriculum']);

  return (
    <>
      <Title title={t('curriculum:title')} />
      <p>{dummyText}</p>
    </>
  );
};

export default Curriculum;
