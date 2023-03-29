import React from "react";
import styled from "styled-components";
import streelLightImg from "../../Assets/Images/commercial.jpeg";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Container>
      <Absolutes>
        <Navbar />
      </Absolutes>
      <Hero />

      <First>
        <div className="officeLocation">
          <h3>Our Office</h3>
          <p>
            We are currently located at 11, Itelorun Close, off Alhaji-Jimoh
            Street, Adeniyi-Jones, Ikeja, Lagos, Nigeria.
          </p>
        </div>
        <div className="mapSection">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.262921245764!2d3.348771514632165!3d6.614220395216936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93cdcf476d77%3A0x5c53a47514ee0e89!2s11%20Itelorun%20Cl%2C%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1678577692236!5m2!1sen!2sng"
            loading="lazy"
          ></iframe>
        </div>
      </First>
      <Second>
        <Contact />
      </Second>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
`;
const Absolutes = styled.section`
  background: linear-gradient(rgba(14, 14, 14, 0.511), rgba(0, 9, 13, 0.65)),
    url(${streelLightImg}), no-repeat, center;
  height: 30vh;
  width: 100vw;
  max-width: 1440px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const First = styled.div`
  background-color: #f1f2f2;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }

  .officeLocation {
    padding-left: 120px;
    @media screen and (max-width: 480px) {
      padding-left: 0;
    }
    h3 {
      font-family: "Coda", cursive;
      font-size: 40px;
      margin-top: 30px;
    }
    p {
      font-size: 14px;
      font-family: "Coda", cursive;
      margin-top: 30px;
      width: 80%;
      color: #3a3a3a;
    }
  }

  .mapSection {
    iframe {
      width: 700px;
      height: 400px;
      border: none;
      background: transparent;

      @media screen and (max-width: 480px) {
        width: 98%;
        height: 300px;
      }
    }
  }
`;

const Second = styled.div``;
