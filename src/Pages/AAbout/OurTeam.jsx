import React from "react";
import styled from "styled-components";

const OurTeam = () => {
  return (
    <Container>
      <h3 className="heading">Our Team</h3>

      <Content>
        <p>
          Our mission is to deliver to all our clients innovative,
          technologically advanced and reliable solutions in the field of energy
          services, that strongly improve their business competitiveness, energy
          efficiency and environmental footprint.
        </p>
        <p>
          Our experts, diversified experiences and result-driven operations
          attest to our commitment.
        </p>
      </Content>
    </Container>
  );
};

export default OurTeam;
const Container = styled.div`
  background-color: #f1f2f2;
  padding: 40px 140px 60px;
  margin-top: 50px;
  .heading {
    margin-top: 20px !important;
    text-align: center;
  }
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;

  p {
    font-size: 16px;
    color: #000000c3;
    flex: 1 0 20rem;
  }
`;
