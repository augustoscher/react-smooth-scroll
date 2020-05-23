import React from "react";
import styled from "styled-components";

const DivImg = styled.div`
  display: flex !important;
  width: 60px;
  height: 60px;
  background: #000aff;
  margin: 0 auto;
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

const Div = styled.div`
width: 100%;
display: block;
border-radius: 4px;
`;

const Text = styled.h3`
  font-size: 16px;
  font-weight: 350;
  line-height: 1.5;
  margin-bottom: 0;
`;

const A = styled.a`
  color: #000AFF;
`;

const Card = ({ icon, link, label }) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex ftco-animate">
      <Div className="align-self-stretch box text-center p-4 shadow">
        <DivImg className="align-items-center justify-content-center">
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Img src={icon} />
          </a>
        </DivImg>
        <div>
          <Text>
            <A
              href={link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {label}
            </A>
          </Text>
        </div>
      </Div>
    </div>
  );
};

export default Card;
