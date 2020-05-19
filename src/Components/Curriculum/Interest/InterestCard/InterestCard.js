import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  color: var(--black);
  font-weight: 600;
  font-size: 1.25rem;
`;

const InterestCard = ({ title }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="bg-white rounded-lg shadow p-4">
        <Text className="h5 font-weight-bold text-center mb-0">{title}</Text>
      </div>
    </div>
  );
};

export default InterestCard;
