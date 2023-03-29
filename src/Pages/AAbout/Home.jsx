import React from "react";
import styled from "styled-components";
import headBg from "../../Assets/Images/about.jpeg";
import Hero from "./Hero";
import Navbar from "./Navbar";
import OurTeam from "./OurTeam";
import WhoWeAre from "./WhoWeAre";
import WhySwatini from "./WhySwatini";

const Home = () => {
  return (
    <Container>
      <Absolutes>
        <Navbar />
      </Absolutes>
      <Hero />

      <Content>
        <WhoWeAre />
        <h3 className="heading">Our Mission</h3>
        <div className="mission">
          <p>
            Our mission is to empower businesses and individuals with
            affordable, reliable, and sustainable energy solutions, while
            contributing to the global effort to combat climate change and
            improve energy access.
          </p>
          <p>
            We are here help individuals and organizations unlock the full
            potential of energy efficiency and renewable energy sources to
            reduce their carbon footprint and save on energy costs. With over a
            decade of experience in the industry, we are equipped with the
            skills and expertise to design, develop, and implement customized
            energy solutions that meet the specific needs of our clients.
          </p>
        </div>

        <OurTeam />
        <WhySwatini />
      </Content>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  margin-bottom: 40px;
`;
const Absolutes = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.544), rgba(0, 9, 13, 0.661)),
    url(${headBg});
  height: 30vh;
  max-width: 1440px;

  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  .heading {
    font-family: "Coda", cursive;
    font-size: 35px;
    margin: 70px 140px 30px;
    @media screen and (max-width: 480px) {
      font-size: 25px;
      text-align: center;
    }
  }
  .mission {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    padding: 0 140px;
    @media screen and (max-width: 480px) {
      flex-direction: column;
      padding: 30px;
      gap: 20px;
    }

    p {
      color: #000000c3;
      flex: 1 0 20rem;
      @media screen and (max-width: 480px) {
        flex: 1 0 10rem;
        font-size: 13px;
      }
    }
  }
`;
