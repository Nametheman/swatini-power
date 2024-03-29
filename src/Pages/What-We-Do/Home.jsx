import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import streelLightImg from "../../Assets/Images/what_we_do.jpeg";
import Hero from "./Hero";
import generator from "../../Assets/Images/generatorR.jpeg";
import { Link } from "react-router-dom";
import Do1 from "./Do1";
import Do2 from "./Do2";
import Do3 from "./Do3";
import Do4 from "./Do4";
import Models from "./Models";

const Home = () => {
  return (
    <Container>
      <Absolutes>
        <Navbar />
      </Absolutes>
      <Hero />
      <div
        className="content1"
        data-aos="zoom-in-down"
        data-aos-easing="ease-in-sine"
      >
        <p>
          <span data-aos-offset="300" data-aos-easing="ease-in-sine">
            At Swatini Power Ltd, we solve the energy problems of our clients.
            We offer Energy-as-a-Service (EaaS) solutions for our commercial and
            industrial clients. Our mission is to help businesses in Nigeria
            achieve their sustainability goals and reduce their energy costs
            through the implementation of efficient and sustainable energy
            solutions.
          </span>
          <br /> <br />
          <span
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
          >
            At Swatini Power Ltd, we understand that energy is a critical
            component of any business. However, the unstable power supply from
            the national grid can be a significant challenge, driving up costs
            and hindering operations, we are also aware that traditional energy
            procurement models can be challenging for businesses due to high
            upfront capital costs and ongoing operational expenses. That's why
            we offer an EaaS model that allows businesses to access sustainable
            energy solutions without the financial burden and risks associated
            with owning and operating their own energy systems.
          </span>
          <br /> <br /> Our EaaS model is based on a pay-as-you-go or long-term
          power purchase agreement that allows businesses to access reliable and
          affordable energy solutions without the need for upfront capital
          expenditure. We design, develop, finance, and implement customized
          energy solutions that bring immediate relief to our clients.
        </p>
        <div className="img_container">
          <img src={generator} alt="" />
          <Link to="/technolgies-and-solutions">
            MORE ABOUT OUR TECHNOLOGIES
          </Link>
        </div>
      </div>
      <h3>Lower your energy costs</h3>
      <Do1 data-aos="zoom-in-down" />
      <h3>Finance your energy retrofit</h3>
      <Do2 data-aos="zoom-in-down" />
      <h3>Reduce your carbon footprint</h3>
      <Do3 data-aos="zoom-in-down" />
      {/* <h3>Develop your renewable energy project</h3>
      <Do4 /> */}
      <Models />
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

    @media screen and (max-width: 480px) {
      flex-direction: column;
      padding: 30px;
    }

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
      padding-left: 60px;
      @media screen and (max-width: 480px) {
        padding-left: 0;
      }

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

        @media screen and (max-width: 480px) {
          margin-top: 20px;
          width: 80%;
          font-size: 10px;
          padding: 14px 40px;
          /* height: 200px; */
          /* border-radius: 10px; */
        }
        &:hover {
          background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
        }
      }

      img {
        width: 450px;
        height: 300px;

        @media screen and (max-width: 480px) {
          margin-top: 20px;
          width: 80%;
          height: 200px;
          border-radius: 10px;
        }
      }
    }
  }

  h3 {
    text-align: center;
    font-family: "Coda", cursive;
    font-size: 40px;
    margin-top: 90px;

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

const Absolutes = styled.section`
  background: linear-gradient(rgba(14, 14, 14, 0.511), rgba(0, 9, 13, 0.65)),
    url(${streelLightImg}), no-repeat, center;
  height: 50vh;
  background-size: cover;
  width: 100vw;
  /* max-width: 1440px; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 480px) {
    height: 30vh;
  }
`;
