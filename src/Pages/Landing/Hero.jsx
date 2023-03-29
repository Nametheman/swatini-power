import React from "react";
import styled from "styled-components";
import lekkiBridge from "../../Assets/Images/lekki-bridge.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <div
        className="content"
        data-aos="zoom-in-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2>
          Optimizing Energy <br /> Efficiency
        </h2>
        <p>
          We offer end-to-end energy-efficient solutions to commercial and
          industrial clients <br /> from design and development to financing and
          implementation.
        </p>

        <div className="escolink">
          <Link to="/esco-model">ESCO Model</Link>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;

  @media screen and (max-width: 480px) {
    top: 80px;
  }

  .content {
    width: 100vw;
    padding: 0 10%;
    margin-top: 17%;
    color: #fff;
    font-family: "Coda", cursive;

    h2 {
      font-size: 90px;
      letter-spacing: 1.9px;
      line-height: 1.1;
      /* font-weight: bold; */
      transform: scaleY(1.1);
      @media screen and (max-width: 1260px) {
        font-size: 50px;
        margin-top: 30px;
      }
    }

    p {
      margin-top: 40px;
      letter-spacing: 1.9px;
      line-height: 1.6;
      color: #e0e0e0;
      margin-left: 5px;
    }

    .escolink {
      margin-top: 80px;

      a {
        background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
        padding: 14px 50px;
        text-decoration: none;
        color: #fff;
        font-size: 17px;
        letter-spacing: 1.2px;
        transition: all 0.3s ease-in-out;
        border-radius: 6px;
        @media screen and (max-width: 1260px) {
          font-size: 15px;
        }

        &:hover {
          background-color: ${process.env.REACT_APP_PRIMARY_COLOR};
        }
      }
    }
  }
`;
