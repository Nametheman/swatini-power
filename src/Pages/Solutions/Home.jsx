import React from "react";
import styled from "styled-components";
import streelLightImg from "../../Assets/Images/technology2.jpeg";
import Hero from "./Hero";
import Navbar from "./Navbar";
import WhySwatini from "./WhySwatini";

const Home = () => {
  return (
    <Container>
      <Absolutes>
        <Navbar />
      </Absolutes>
      <Hero />

      <Content>
        <h3 className="mainHead">Why Choose Swatini?</h3>
      </Content>
      <WhySwatini />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
`;
const Absolutes = styled.section`
  background: linear-gradient(rgba(14, 14, 14, 0.511), rgba(0, 9, 13, 0.65)),
    url(${streelLightImg}), no-repeat, center;
  height: 50vh;
  width: 100vw;
  max-width: 1440px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  text-align: center;
  font-family: "Coda", cursive;
  font-size: 40px;
  margin: 35px 0;
`;
