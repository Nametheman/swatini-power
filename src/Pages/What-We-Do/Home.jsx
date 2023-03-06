import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import streelLightImg from "../../Assets/Images/streetlight.webp";
import Hero from "./Hero";
import generator from "../../Assets/Images/poweful.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Absolutes>
        <Navbar />
      </Absolutes>
      <Hero />
      <div className="content1">
        <p>
          We solve problems for our clients. By maximizing energy efficiency, we
          can lower your production costs, reduce CO2 emissions, improve comfort
          for your employees and visitors, and most importantly help you save
          money. We design energy efficiency projects based on thorough analyses
          of your consumption and needs, and then our team of engineers
          implements the projects in a short time frame and with minimal
          disruption of your operations. We maintain and operate the equipment
          installed for the duration of the contract you sign with us. <br />{" "}
          <br />
          We can yield concrete results with no CAPEX expenditure on your part
          because on top of all the engineering work we do, we also finance the
          projects. You repay us from the savings you achieve thanks to improved
          energy efficiency and lowered costs. <br /> <br /> Resalta also
          develops large scale renewable energy projects. Our goal is to
          increase renewables in the energy mix of each country we operate in.
          Combined with our efforts to increase energy efficiency for companies
          and public institutions, we hope to protect the environment for future
          generations. <br /> <br /> You can find out more about the variety of
          services that we offer below – this is how we help you achieve your
          energy goals.
        </p>
        <div className="img_container">
          <img src={generator} alt="" />
          <Link to="#">MORE ABOUT OUR TECHNOLOGIES</Link>
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;

  .content1 {
    padding: 70px 100px;
    display: flex;
    justify-content: space-between;

    p {
      flex: 1 0 5rem;
      padding: 0 40px;
      color: rgba(14, 14, 14, 0.639);
    }

    .img_container {
      flex: 1 0 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-left: 1px solid rgba(14, 14, 14, 0.094);

      a {
        background-color: ${process.env.REACT_APP_PRIMARY_COLOR};
        color: white;
        text-decoration: none;
        font-size: 13px;
        font-weight: 600;
        padding: 14px 70px;
        margin-top: 20px;
        transition: all 0.2s ease-in;
        border-radius: 4px;

        &:hover {
          background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
        }
      }

      img {
        width: 60%;
      }
    }
  }
`;

const Absolutes = styled.section`
  background: linear-gradient(rgba(14, 14, 14, 0.511), rgba(0, 9, 13, 0.65)),
    url(${streelLightImg}), no-repeat, center;
  height: 50vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
