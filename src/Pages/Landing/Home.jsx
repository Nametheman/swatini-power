import React from "react";
import styled from "styled-components";
import lekkiBridge from "../../Assets/Images/lekki-bridge.jpeg";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import WhySwatini from "./WhySwatini";
import { FaCaretRight } from "react-icons/fa";

const Home = () => {
  return (
    <Container>
      <Absolutes className="absolutes">
        <Navbar />
      </Absolutes>
      <Hero />

      <h3 className="heading">Sectors we serve</h3>
      <Services />
      <h3 className="heading">Why choose Swatini?</h3>
      <WhySwatini />

      <div className="learnMore">
        <FaCaretRight />
        <a href="#">Learn More</a>
      </div>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  position: relative;

  .heading {
    font-family: "Coda", cursive;
    font-size: 35px;
    text-align: center;
    margin: 70px 0 30px;
  }

  .learnMore {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      font-family: "Coda", cursive;
      font-size: 15px;
      color: ${process.env.REACT_APP_SECONDARY_COLOR};
      text-decoration: none;
      font-weight: 600;
      /* margin: 70px 0 30px; */
    }
    svg {
      /* width: 100%; */
      /* margin: auto 0; */
      color: ${process.env.REACT_APP_SECONDARY_COLOR};
    }
  }
`;

const HeroSection = styled.div``;

const Absolutes = styled.section`
  background: linear-gradient(rgba(56, 182, 255, 0.35), rgba(0, 9, 13, 0.65)),
    url(${lekkiBridge}), no-repeat, center;
  height: 100vh;
  width: 100vw;
`;