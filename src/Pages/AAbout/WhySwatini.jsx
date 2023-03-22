import React from "react";
import styled from "styled-components";

const WhySwatini = () => {
  const services = [
    {
      title: "Expertise",
      text: "Our team has extensive experience in delivering high-quality services to clients in various industries.",
    },
    {
      title: "Personalized Approach",
      text: "We work closely with each client to understand their specific needs and tailor our solutions to meet their unique requirements.",
    },
    {
      title: "Quality",
      text: "We maintain rigorous quality control standards to ensure that our services meet the highest levels of excellence and precision.",
    },
    {
      title: "Flexibility",
      text: "We are adaptable and able to respond quickly to changing circumstances and client needs, ensuring that we always deliver on time and on budget.",
    },
    {
      title: "Competitive Pricing",
      text: "We offer competitive pricing that is transparent and fair, with no hidden costs or fees.",
    },
    {
      title: "Local Knowledge",
      text: "We have a deep understanding of the local business environment, culture, and regulatory landscape, enabling us to provide valuable insights and guidance to our clients.",
    },
    {
      title: "Collaborative Approach",
      text: "We believe in working collaboratively with our clients and partners to achieve shared goals and build long-term relationships based on trust and mutual respect.",
    },
    {
      title: "Innovative Solutions",
      text: "We are committed to staying at the forefront of our industry, constantly exploring new technologies and approaches to provide our clients with innovative solutions that drive growth and success.",
    },
    {
      title: "Commitment to Sustainability",
      text: "We are committed to sustainable business practices and social responsibility, striving to minimize our environmental impact and support the local community.",
    },
    {
      title: "Customer Satisfaction",
      text: "Our top priority is the satisfaction of our clients, and we go above and beyond to ensure that they are happy with our services and the results we achieve together.",
    },
  ];
  return (
    <Container>
      {/* <h3 className="heading">Why Chooose Swatini Power?</h3> */}
      <Content>
        {services.map((service) => {
          return (
            <div className="grid-item">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          );
        })}
      </Content>
    </Container>
  );
};

export default WhySwatini;

const Container = styled.div`
  margin-top: 60px;

  .heading {
    margin-bottom: 60px;
    text-align: center;
    font-size: 35px;
  }
`;
const Content = styled.div`
  padding: 0 140px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 100px;
  /* justify-content: space-between; */

  .grid-item {
    /* margin-right: 30px; */
    h3 {
      margin-bottom: 20px;
      color: ${process.env.REACT_APP_SECONDARY_COLOR};
    }
    p {
      color: #000000c3;
      font-size: 15px;
    }
  }
`;
