import React, { useState } from "react";
import styled from "styled-components";
import service1 from "../../Assets/Images/commercial_solar.jpeg";
import service2 from "../../Assets/Images/commercial.jpeg";
import service3 from "../../Assets/Images/energy_mgt.jpeg";

const Services = () => {
  //   const [serviceId, setServiceId] = useState();

  const services = [
    {
      name: "Commercial Solar Installation",
      brief:
        "Looking to reduce your organization's environmental impact while also cutting down on electricity costs? With a commercial solar installation, you can tap into the abundant energy of the sun to minimize your carbon footprint and decrease your reliance on traditional electrical utilities. Plus, by leveraging solar power during peak demand periods, you can enjoy significant savings on your energy bills while also contributing to a more sustainable future.",
      image: service1,
      id: "service1",
    },
    {
      name: "Battery Energy Storage Solution",
      brief:
        "Our energy storage solutions enable businesses to store excess energy during periods of low demand and discharge it during peak periods, resulting in significant cost savings and improved energy efficiency. By strategically managing electricity usage, businesses can take advantage of lower prices and avoid higher costs during peak periods.",
      image: service2,
      id: "service2",
    },
    {
      name: "Energy Management Systems",
      brief:
        "We can provide energy management systems that use battery storage systems to optimize energy use and reduce costs. Our team can design customized energy management systems that meet the unique needs of the client, such as scheduling energy use during times of low electricity prices or automatically switching to battery power during peak demand periods.",
      image: service3,
      id: "service3",
    },
  ];

  return (
    <Container>
      {services.map((service) => {
        // setServiceId(service.id);
        return (
          <div className="card" key={service.id}>
            <img src={service.image} alt="" />

            <div className="info">
              <h3>{service.name}</h3>
              <p>{service.brief}</p>
              <a
                className="btn"
                onClick={() => {
                  alert(service.id);
                }}
              >
                Learn More
              </a>
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
    background-color: #f1f2f2;
    /* padding: 15px 20px; */
    /* box-shadow: 0px 0px 14px -1px rgba(0, 0, 0, 0.39);
    -webkit-box-shadow: 0px 0px 14px -1px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 0px 14px -1px rgba(0, 0, 0, 0.39); */
    flex: 1 0 18em;
    /* display: flex;
    flex-direction: column;
    align-items: flex-end; */
    position: relative;
    height: 800px;

    img {
      width: 100%;
      height: 270px;
    }

    .info {
      padding: 15px 40px;
      display: flex;
      flex-direction: column;
      /* align-items: flex-end; */
      justify-content: space-between;

      h3 {
        font-size: 35px;
        font-family: "Coda", cursive;
        color: #202020;
        letter-spacing: 1.1px;
      }
      p {
        margin: 30px 0 50px;
        color: #686868;
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
`;
