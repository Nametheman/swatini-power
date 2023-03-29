import React from "react";
import styled from "styled-components";

const OurTeam = () => {
  return (
    <Container
      data-aos="zoom-in-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h3 className="heading">Our Vision</h3>

      <Content>
        <p>
          Our vision is to become a leading provider of Energy as a Service
          (EaaS) solutions in the region, delivering innovative, cost-effective,
          and environmentally friendly solutions that enable our clients to
          achieve their sustainability goals.
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

  @media screen and (max-width: 480px) {
    padding: 30px;
  }
  .heading {
    margin-top: 20px !important;
    text-align: center;
  }
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    /* padding: 30px; */
    gap: 20px;
  }

  p {
    font-size: 16px;
    color: #000000c3;
    flex: 1 0 20rem;
    @media screen and (max-width: 480px) {
      flex: 1 0 8rem;
      font-size: 13px;
    }
  }
`;
