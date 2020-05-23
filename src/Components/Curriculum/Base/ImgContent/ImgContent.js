import React from 'react';
import styled from "styled-components";

const Div = styled.div`
  display: flex !important;
  width: 60px;
  height: 60px;
  background: var(--tertiary);
  margin-bottom: 10px;
  border-radius: 50%;

  &:hover {
    background: var(--dark);
  }
`;

const Img = styled.img`
  color: #000aff;
  width: 24px;
  vertical-align: middle;
  border-style: none;
`;

const ImgContent = ({ icon }) => {
  return (
    <Div className="icon d-flex align-items-center justify-content-center">
      <Img src={icon} />
    </Div>
  );
}

export default ImgContent;
