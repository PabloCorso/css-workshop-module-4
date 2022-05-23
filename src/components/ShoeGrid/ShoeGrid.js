import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShowWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShowWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ShowWrapper = styled.div`
  min-width: 270px;
  flex: 1;
`;

export default ShoeGrid;
