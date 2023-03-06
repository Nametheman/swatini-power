import React from "react";
import Footer from "./Footer";
import Content from "./Content";
import styled from "styled-components";

const index = ({ children }) => {
  return (
    <Container>
      <Content children={children} />
      <Footer />
    </Container>
  );
};

export default index;
const Container = styled.section``;
