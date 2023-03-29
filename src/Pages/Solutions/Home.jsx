import React from "react";
import styled from "styled-components";
import streelLightImg from "../../Assets/Images/tech.jpeg";
import WhySwatini from "./WhySwatini";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Industries from "./Industries";
import Solar from "./Solar";

const Home = () => {
  return (
    <Container>
      <Absolutes>
        <Navbar />
      </Absolutes>
      <Hero />
      <WhySwatini />
      <Industries />
      <Solar />
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
  height: 30vh;
  width: 100vw;
  max-width: 1440px;
  /* max-height: 800px; */
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
