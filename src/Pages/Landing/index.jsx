import React from "react";
import { PagesLayout } from "../../Layout";
import styled from "styled-components";
import Home from "./Home";

const index = ({ children }) => {
  return (
    <Container>
      <PagesLayout children={<Home />} />
    </Container>
  );
};

export default index;
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
`;
