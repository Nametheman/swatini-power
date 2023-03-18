import React from "react";
import styled from "styled-components";
import service2 from "../../Assets/Images/commercial.jpeg";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="flexContent">
        <h3 className="title">Who we are</h3>
        <p>
          At Swatini Power Ltd, we are a team of experts committed to providing
          reliable, sustainable, and affordable energy solutions to our clients.
          We are passionate about addressing the energy needs of our clients and
          creating a greener future for all.
        </p>
        <p>
          On-site solar solutions are an excellent choice for businesses seeking
          to reduce their electricity costs. Our solar installations are
          custom-designed to meet your site requirements and installed directly
          on your premises. We offer innovative financing options, including
          Opex (zero capital investment), Capex (client owns the power plant),
          and easy EMIs, making on-site solar solutions affordable for everyone.
          Our Off-site solutions provide a great opportunity for industries with
          high energy demand but limited space for solar installations within
          their premises. Through off-site solar, we will generate solar energy
          from a remote location and transmit it through the grid infrastructure
          to meet the bulk energy requirements of our clients. Our clients rely
          on off-site solar to help meet their Renewable Purchase Obligations
          (RPOs) and long-term energy transition goals.
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
      margin-bottom: 10px;
    }
    img {
      width: 100%;
    }
  }
`;
