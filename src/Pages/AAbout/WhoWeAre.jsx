import React from "react";
import styled from "styled-components";
import service2 from "../../Assets/Images/commercial.jpeg";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="flexContent">
        <h3 className="title">Who we are</h3>
        <p>
          Resalta was founded in 2011 with the aim of becoming the leading
          provider of energy services in the region. Within six years we have
          registered incredible growth, gained a wealth of experience and helped
          countless companies and public institutions lower their energy costs,
          improve their energy efficiency and reduce their carbon footprints.
          Our goal remains unchanged and we continue to diversify our service
          portfolio in order to consistently offer the best solutions to our
          clients’ energy challenges.
        </p>
      </div>
      <div className="flexContent">
        <img src={service2} alt="" />
      </div>
    </Container>
  );
};

export default WhoWeAre;

const Container = styled.div`
  margin: 50px 0;
  padding: 0 140px;

  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  .flexContent {
    flex: 1 0 20rem;

    h3 {
      margin-bottom: 30px;
      font-size: 35px;
      font-family: "Coda", cursive;
    }

    p {
      color: #000000c3;
      letter-spacing: 1.02px;
    }
    img {
      width: 100%;
    }
  }
`;
