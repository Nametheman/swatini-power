import React from "react";
import styled from "styled-components";

const WhySwatini = () => {
  const services = [
    {
      title: "Savings Guarantee",
      text: "The only true measure of success of the projects we carry out are the savings our clients achieve. As a reliable partner, we at Resalta guarantee these savings to our clients, and deliver on our promises with precision and accuracy. ",
    },
    {
      title: "Innovation",
      text: "Innovations are crucial to the work Resalta does. Our solutions are adapted to each individual project, and we use the latest technologies and all the resources at our disposal to provide the best solutions and overcome even the greatest of challenges.",
    },
    {
      title: "Technological neutrality",
      text: "We are not dependent on any single equipment or technology producer, so that we can always provide our clients with the very best available technology suited to their particular needs.",
    },
    {
      title: "Environmental friendliness",
      text: "Sustainability, CO2 cuts and environmental protection are key factors in our work, as we work hard at making sure that the projects we develop and measures we implement help not only our clients but wider communities and their environment as a whole, creating clean energy that will last for decades to come.",
    },
    {
      title: "Diversified expertise",
      text: "Our team members are proven experts in a wide variety of different fields, with valuable regional experience, which allows us to offer our clients a broad range of specialized energy services.",
    },
    {
      title: "Independence",
      text: "Resalta has strong backing and years of experience and expertise, but we maintain a flexible, responsive and agile mindset. Our independence allows us to be quick and efficient and best meet our clients’ needs in a short time frame while offering bespoke solutions.",
    },
  ];
  return (
    <Container>
      <h3 className="heading">Why Chooose Swatini Power?</h3>
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
