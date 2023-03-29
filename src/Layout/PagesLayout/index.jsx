import React from "react";
import Footer from "./Footer";
import Content from "./Content";
import styled from "styled-components";
import MobileNav from "./MobileNav";

const index = ({ children }) => {
  return (
    <Container>
      <Content children={children} />
      <Footer />
      <MobileNav />
    </Container>
  );
};

export default index;
const Container = styled.section`
  position: relative;
`;
