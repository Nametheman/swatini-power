import React, { useState } from "react";
import styled from "styled-components";
import service1 from "../../Assets/Images/commercial_solar.jpeg";
import service2 from "../../Assets/Images/batterystorage.jpeg";
import service3 from "../../Assets/Images/energy_mgt.jpeg";
import Modal from "./Modal";
import AOS from "aos";

const Services = () => {
  AOS.init();
  const [showModal, setShowModal] = useState(false);
  const [serviceId, setServiceId] = useState();
  const services = [
    {
      name: "Commercial Solar Installation",
      brief:
        "Looking to reduce your organization's environmental impact while also cutting down on electricity costs? With a commercial solar installation, you can tap into the abundant energy of the sun to minimize your carbon footprint and decrease your reliance on traditional electrical utilities. Plus, by leveraging solar power during peak demand periods, you can enjoy significant savings on your energy bills while also contributing to a more sustainable future.",
      image: service1,
      id: "service1",
    },
    {
      name: "Battery Energy Storage",
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
        return (
          <div
            className="card"
            key={service.id}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={service.image} alt="" />

            <div className="info">
              <h3>{service.name}</h3>
              <p>{service.brief}</p>
              <a
                className="btn"
                onClick={() => {
                  setShowModal(true);
                  setServiceId(service.id);
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        );
      })}
      {showModal && (
        <Modal id={serviceId} isShow={setShowModal} show={showModal} />
      )}
    </Container>
  );
};

export default Services;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  gap: 1.4rem;
  padding: 15px 20px;

  .card {
    background-color: #f1f2f2;
    flex: 1 0 18em;
    position: relative;
    height: 800px;
    border-radius: 20px;
    box-shadow: 0px 0px 32px 2px rgba(0, 0, 0, 0.07);
    -webkit-box-shadow: 0px 0px 32px 2px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 0px 32px 2px rgba(0, 0, 0, 0.07);
    @media screen and (max-width: 1260px) {
      flex: 1 0 13em;
      height: 740px;
    }

    img {
      width: 100%;
      height: 270px;
      background: #f1f2f2;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;

      @media screen and (max-width: 1260px) {
        height: 200px;
      }
    }

    .info {
      padding: 15px 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-size: 35px;
        font-family: "Coda", cursive;
        color: #202020;
        letter-spacing: 1.1px;

        @media screen and (max-width: 1260px) {
          font-size: 26px;
        }
      }
      p {
        margin: 30px 0 50px;
        color: #686868;
        letter-spacing: 1.1px;

        @media screen and (max-width: 1260px) {
          font-size: 14px;
        }
      }
      .btn {
        padding: 12px 30px;
        display: inline-block;
        text-decoration: none;
        background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
        color: #fff;
        border: none;
        text-align: center;
        font-weight: 600;
        letter-spacing: 1.1px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 10px 0;
        transition: 0.2s ease-in-out;
        align-self: flex-start;
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
