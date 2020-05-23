import React from "react";
import TitleItem from "../TitleItem/TitleItem";
import LicenseItem from './LicenseItem/LicenseItem';

const License = ({ title, licenses }) => {
  return (
    <>
      <TitleItem title={title} />
      {licenses.map((license, id) => (
        <LicenseItem key={id} license={license} />
      ))}
    </>
  );
};

export default License;
