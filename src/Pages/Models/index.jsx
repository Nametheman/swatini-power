import React from "react";
import { PagesLayout } from "../../Layout";
import styled from "styled-components";
import Esco from "./Esco";

const index = ({ children }) => {
  return (
    <Container>
      <PagesLayout children={<Esco />} />
    </Container>
  );
};

export default index;
const Container = styled.div``;
