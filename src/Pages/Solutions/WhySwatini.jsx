import React, { useState } from "react";
import styled from "styled-components";
import processImg1 from "../../Assets/Images/analyze.jpeg";
import processImg2 from "../../Assets/Images/projectdesign.jpeg";
import processImg3 from "../../Assets/Images/distributemonitor.jpeg";
import processImg4 from "../../Assets/Images/procurement.jpeg";

const Services = () => {
  //   const [serviceId, setServiceId] = useState();

  const services = [
    {
      image: processImg1,
      name: "Auditing Utility Data",
      brief:
        "Auditing your utility data involves analyzing your energy usage and costs over a specific period of time to identify areas where you can reduce your energy consumption and save money on your utility bills. This process involves collecting and analyzing data from your utility bills, as well as monitoring your energy usage patterns using smart meters or other monitoring tools.",
      id: "service1",
    },
    {
      image: processImg2,
      name: "Project Design and Approval",
      brief:
        "Our project design and approval involves the process of planning and creating a project, as well as obtaining the necessary approvals and permits from regulatory agencies and stakeholders. This process typically involves several steps, including identifying the goals and objectives of the project, defining the scope and timeline, developing a budget, and creating detailed project plans and specifications.",
      id: "service2",
    },
    {
      image: processImg4,
      name: "Procurement and Installation",
      brief:
        "During the procurement process, Swatini project managers work with vendors or suppliers to identify the best options for the project, considering factors such as quality, cost, and availability. They then negotiate contracts and pricing to ensure that the project stays within budget. Once the equipment and materials are procured, the installation process begins. This involves coordinating with contractors, scheduling installation timelines, and ensuring that all necessary permits and approvals are in place.",
      id: "service3",
    },
    {
      image: processImg3,
      name: "Distribute and Monitor Power",
      brief:
        "With Swatini, the process of distributing and monitoring power is critical to ensuring that our commercial clients have access to reliable and affordable electricity. By investing in advanced monitoring and distribution systems, businesses can improve the efficiency and reliability of their on-site generated power while also reducing the environmental sustainability of their businesses with regards to climate change.",
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
