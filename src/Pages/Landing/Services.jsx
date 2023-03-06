import React, { useState } from "react";
import styled from "styled-components";
import service1 from "../../Assets/Images/public_sector.jpeg";
import service2 from "../../Assets/Images/commercial.jpeg";
import service3 from "../../Assets/Images/industrial.jpeg";

const Services = () => {
  //   const [serviceId, setServiceId] = useState();

  const services = [
    {
      name: "Public Clients",
      brief:
        "We collaborate with clients from the public sector on projects to lower costs, improve energy efficiency and reduce CO2 emissions. We carry out the entire project, from energy analysis, project concept, to financing, implementation and maintenance, so that our public partners take on 0 risk.",
      image: service1,
      id: "service1",
    },
    {
      name: "Commercial and business clients",
      brief:
        "We help clients save energy and lower costs so that they can focus their resources on improving the comfort and experience of their own clients and staff. We take on all the risks and costs of energy renovation projects, from energy audit, concept, to financing, implementation and maintenance.",
      image: service2,
      id: "service2",
    },
    {
      name: "Industrial Clients",
      brief:
        "We provide adapted industrial solutions regardless of production sector. By taking care of every step of the project from financing to maintenance, we optimize energy production processes to ensure the highest possible savings, while allowing clients to remain focused on their core business.",
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
    height: 700px;

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
