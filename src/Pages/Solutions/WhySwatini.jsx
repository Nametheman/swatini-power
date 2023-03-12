import React, { useState } from "react";
import styled from "styled-components";

const Services = () => {
  //   const [serviceId, setServiceId] = useState();

  const services = [
    {
      name: "Technological Neutrality",
      brief:
        "We are not dependent on any single equipment or technology provider, so that we can always make sure to offer our clients the very best available technology suited to their particular needs.",
      id: "service1",
    },
    {
      name: "Innovation",
      brief:
        "Innovations are crucial to the work Resalta does. Our solutions are adapted to each individual project, always with the goal of providing the strongest possible impact on our client’s energy savings.",
      id: "service2",
    },
    {
      name: "Turnkey solutions",
      brief:
        "We take care of everything from A to Z. You can relax knowing that Resalta will carry out your energy renovation project without any drain on your resources, be it manpower, time or money.",
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
    </Container>
  );
};

export default Services;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  padding: 15px 20px;

  .card {
    flex: 1 0 18em;
    position: relative;

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
