import React, { useState } from "react";
import styled from "styled-components";
import processImg1 from "../../Assets/Images/sunlight.jpeg";
import processImg2 from "../../Assets/Images/projectdesign.jpeg";
import processImg3 from "../../Assets/Images/distributemonitor.jpeg";
import processImg4 from "../../Assets/Images/procurement.jpeg";

const Services = () => {
  //   const [serviceId, setServiceId] = useState();

  const services = [
    {
      image: processImg1,
      name: "Capture The Sunlight",
      brief:
        "Solar panels are designed to harness the energy from the sun's rays and convert it into usable electricity through a process known as the photovoltaic effect. The basic structure of a solar panel consists of two semiconductor layers - the top thin layer and the bottom thick layer.",
      id: "service1",
    },
    {
      image: processImg2,
      name: "Convert The Power",
      brief:
        "When sunlight hits the top layer of the solar panel, it knocks electrons loose from the atoms in the material. These free electrons flow towards the bottom layer of the panel, which is positively charged, creating a flow of electricity. The top layer of the panel is made up of photovoltaic cells, which are made of materials such as silicon, that are able to absorb and convert sunlight into electricity.",
      id: "service2",
    },
    {
      image: processImg4,
      name: "Distribute The Power",
      brief:
        "Utilizing solar energy during daytime can power machinery and equipment, reducing operating costs and increasing production efficiency. This renewable energy source is abundant and can be harnessed effectively. Take advantage of it to improve your business sustainability.",
      id: "service3",
    },
    {
      image: processImg3,
      name: "Go Solar And Cut Cost",
      brief:
        "Solar energy is an untapped, abundant and clean renewable resource. It can be used to power machinery, heat water and can lead to significant monthly cost savings. Take advantage of this natural resource to increase sustainability and financial benefits.",
      id: "service3",
    },
  ];

  return (
    <Container>
      {services.map((service, idx) => {
        // setServiceId(service.id);
        return (
          <div className="card choice" key={service.id}>
            <div className="info">
              <img src={service.image} alt="" />
              <div className="number">{idx + 1}</div>
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

      img {
        width: 100%;
        height: 180px;
        margin-bottom: 20px;
        border-radius: 12px;
      }
      .number {
        background-color: #686868;
        width: 40px;
        height: 40px;
        display: flex;
        margin: 20px 0;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 50%;
        font-family: "Hanalei", cursive;
        font-size: 33px;
      }
      h3 {
        font-size: 20px;
        /* text-align: center; */
        font-family: "Coda", cursive;
        color: ${process.env.REACT_APP_PRIMARY_COLOR};
        letter-spacing: 1.1px;
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

  /* .choice:not(:last-child) {
    border-right: 1.8px solid #f1f0f0;
  } */
`;
