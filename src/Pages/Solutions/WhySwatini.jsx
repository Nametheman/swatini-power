import React, { useState } from "react";
import styled from "styled-components";

const Services = () => {
  //   const [serviceId, setServiceId] = useState();

  const services = [
    {
      name: "Expertise",
      brief:
        "Our team has extensive experience in delivering high-quality services to clients in various industries.",
      id: "service1",
    },
    {
      name: "Personalized Approach",
      brief:
        "We work closely with each client to understand their specific needs and tailor our solutions to meet their unique requirements.",
      id: "service2",
    },
    {
      name: "Quality",
      brief:
        "We maintain rigorous quality control standards to ensure that our services meet the highest levels of excellence and precision.",
      id: "service3",
    },
  ];

  const services2 = [
    {
      name: "Flexibility",
      brief:
        "We are adaptable and able to respond quickly to changing circumstances and client needs, ensuring that we always deliver on time and on budget.",
      id: "service3",
    },
    {
      name: "Competitive Pricing",
      brief:
        "We offer competitive pricing that is transparent and fair, with no hidden costs or fees.",
      id: "service3",
    },
    {
      name: "Local Knowledge",
      brief:
        "We have a deep understanding of the local business environment, culture, and regulatory landscape, enabling us to provide valuable insights and guidance to our clients.",
      id: "service3",
    },
  ];
  const services3 = [
    {
      name: "Collaborative Approach",
      brief:
        "We believe in working collaboratively with our clients and partners to achieve shared goals and build long-term relationships based on trust and mutual respect.",
      id: "service3",
    },
    {
      name: "Innovative Solutions",
      brief:
        "We are committed to staying at the forefront of our industry, constantly exploring new technologies and approaches to provide our clients with innovative solutions that drive growth and success.",
      id: "service3",
    },
    {
      name: "Commitment to Sustainability",
      brief:
        "We are committed to sustainable business practices and social responsibility, striving to minimize our environmental impact and support the local community.",
      id: "service3",
    },
  ];

  const services4 = [
    {
      name: "Customer Satisfaction",
      brief:
        "Our top priority is the satisfaction of our clients, and we go above and beyond to ensure that they are happy with our services and the results we achieve together.",
      id: "service3",
    },
  ];

  return (
    <Container>
      {services.map((service) => {
        // setServiceId(service.id);
        return (
          <div className="card choice" key={service.id}>
            <div className="info">
              <h3>{service.name}</h3>
              <p>{service.brief}</p>
            </div>
          </div>
        );
      })}
      {services2.map((service) => {
        // setServiceId(service.id);
        return (
          <div className="card choice" key={service.id}>
            <div className="info">
              <h3>{service.name}</h3>
              <p>{service.brief}</p>
            </div>
          </div>
        );
      })}
      {services3.map((service) => {
        // setServiceId(service.id);
        return (
          <div className="card choice" key={service.id}>
            <div className="info">
              <h3>{service.name}</h3>
              <p>{service.brief}</p>
            </div>
          </div>
        );
      })}
      {services4.map((service) => {
        // setServiceId(service.id);
        return (
          <div className="card choice center" key={service.id}>
            <div className="info">
              <h3>{service.name}</h3>
              <p>{service.brief}</p>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Services;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.4rem;
  padding: 15px 20px;

  /* &:nth-child(even) {
    background-color: lightblue;
  } */
  /* .center {
    width: 100%;
    margin: 0 auto;
    border: 1px solid;
  } */
  .card {
    flex: 1 0 18em;
    position: relative;
    margin-bottom: 40px;

    .info {
      padding: 15px 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-size: 30px;
        /* text-align: center; */
        font-family: "Coda", cursive;
        color: ${process.env.REACT_APP_PRIMARY_COLOR};
        letter-spacing: 1.1px;
        text-align: center;
      }
      p {
        margin: 30px 0 50px;
        color: #686868;
        font-size: 14px;
        /* text-align: center; */
        letter-spacing: 1.1px;
      }
      .btn {
        padding: 12px 30px;
        display: inline-block;
        text-decoration: none;
        background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
        color: #fff;
        border: none;
        /* width: 100%; */
        text-align: center;
        font-weight: 600;
        letter-spacing: 1.1px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 10px 0;
        transition: 0.2s ease-in-out;
        align-self: flex-start;
        /* margin-top: auto; */
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        right: 2rem;
        cursor: pointer;

        &:hover {
          background: transparent;
          border: 1px solid ${process.env.REACT_APP_SECONDARY_COLOR};
          color: ${process.env.REACT_APP_SECONDARY_COLOR};
        }
      }
    }
  }

  .choice:not(:last-child) {
    border-right: 1.8px solid #f1f0f0;
  }
`;
