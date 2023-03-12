import React from "react";
import styled from "styled-components";
import headBg from "../../Assets/Images/about_real.jpeg";
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
            Our mission is to deliver to all our clients innovative,
            technologically advanced and reliable solutions in the field of
            energy services, that strongly improve their business
            competitiveness, energy efficiency and environmental footprint.
          </p>
          <p>
            Our experts, diversified experiences and result-driven operations
            attest to our commitment.
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
  height: 50vh;
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
  }
  .mission {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    padding: 0 140px;

    p {
      color: #000000c3;
      flex: 1 0 20rem;
    }
  }
`;
