import React from "react";
import styled from "styled-components";
import lekkiBridge from "../../Assets/Images/lekki-bridge.jpeg";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import WhySwatini from "./WhySwatini";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";

const Home = () => {
  AOS.init();
  return (
    <Container>
      <Absolutes className="absolutes">
        <Navbar />
      </Absolutes>
      <Hero />

      <h3 className="heading">Our solution</h3>
      <div
      // data-aos="fade-right"
      // data-aos-offset="300"
      // data-aos-easing="ease-in-sine"
      >
        <Services />
      </div>
      <h3 className="heading">Our Process</h3>
      <WhySwatini />

      <div className="learnMore">
        <FaCaretRight />
        <Link to="/technolgies-and-solutions">Learn More</Link>
      </div>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  position: relative;
  width: 100vw;

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
    }
    svg {
      color: ${process.env.REACT_APP_SECONDARY_COLOR};
    }
  }
`;

const Absolutes = styled.section`
  background: linear-gradient(rgba(56, 182, 255, 0.35), rgba(0, 9, 13, 0.65)),
    url(${lekkiBridge}), no-repeat, center, center, fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  max-height: 1000px;
`;
