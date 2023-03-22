import React from "react";
import styled from "styled-components";
import lekkiBridge from "../../Assets/Images/lekki-bridge.jpeg";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import WhySwatini from "./WhySwatini";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Absolutes className="absolutes">
        <Navbar />
      </Absolutes>
      <Hero />

      <h3 className="heading">Our solution</h3>
      <Services />
      <h3 className="heading">Why choose Swatini?</h3>
      <WhySwatini />

      <div className="learnMore">
        <FaCaretRight />
        <Link to="/about">Learn More</Link>
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
    margin-bottom: 40px;

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
  max-height: 1000px;
  /* width: 100vw; */
  max-width: 1440px;
`;
