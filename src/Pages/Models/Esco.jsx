import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import bg from "../../Assets/Images/esco.jpeg";
import Hero from "./Hero";
import escoImg from "../../Assets/Images/swatini_esco.jpeg";

const Esco = () => {
  return (
    <Container>
      <Absolutes>
        <Navbar />
      </Absolutes>
      <Hero />
      <Content>
        <div className="leftFrame">
          <h4>
            Everything you should know about financing your project <br />{" "}
            Swatini Power's key business model – guaranteed savings with no
            investment required.{" "}
          </h4>

          <p>
            The ESCO model is an innovative solution that stands for "Energy
            Service Company." It enables organizations such as Swatini to
            perform energy-saving services without requiring clients to invest
            their own resources. Our process begins with an energy audit of the
            facilities, followed by the proposal of a cost-saving solution. We
            take care of the implementation, operation, and maintenance of the
            solution and provide financing, so the client can concentrate on
            their core business. Our guarantee of results is backed by the
            savings the client will experience, which will be used to repay us.
          </p>

          <div className="escoImg">
            <img src={escoImg} alt="" />
          </div>
        </div>
        <div className="rightFrame">
          <p>
            At Swatini PL we are excited to offer a new and innovative solution{" "}
            for commercial, businesses and industrial energy needs in Nigeria.
            Our energy-as-a-service (EaaS) model is designed to help businesses
            like access clean, reliable, and cost-effective energy with ease.
            Energy is an essential part of running a business, but it can also
            be a complex and challenging issue to manage. From sourcing energy,
            to paying bills and maintaining equipment, it can take a lot of time
            and resources to ensure that your energy needs are met. That is
            where we come in. Our EaaS model takes the hassle out of energy
            provision, allowing you to focus on your core business operations.
            With our solution, you can enjoy all the benefits of renewable
            energy with ZERO upfront costs or operational (OpEx)
            responsibilities of owning and managing energy generation and
            distribution assets. Our team of experienced energy experts will
            work with you to design a customized EaaS solution that meets your
            specific needs.
          </p>
          <p className="secondP">
            At Swatini Power Ltd, we believe that our EaaS model offers several
            key advantages over traditional models of energy provision. These
            include: <br /> <br />
            <ul>
              <li>
                <span>ZERO UPFRONT COST:</span> With our EaaS solution, you
                don't have to worry about the high costs associated with
                purchasing and installing energy generation and distribution
                assets. This can result in significant savings for your
                business. Clean, reliable energy: Our EaaS solution provides you
                with access to clean and reliable energy, helping you to reduce
                your carbon footprint and contribute to a sustainable future.
              </li>
              <li>
                <span>EXPERT SUPPORT:</span> Our team of energy experts will
                work with you to optimize your energy usage, reducing costs and
                improving your bottom line. We also provide ongoing support to
                ensure that your energy needs are met.
              </li>
              <li>
                <span>COST SAVINGS:</span> With our solution, you can enjoy cost
                savings through transparent pricing and optimized energy usage.
                This solution is designed to provide you with the most
                cost-effective energy solution for your business.
              </li>
            </ul>
          </p>{" "}
        </div>
      </Content>
    </Container>
  );
};

export default Esco;

const Container = styled.div`
  position: relative;
`;

const Absolutes = styled.section`
  background: linear-gradient(rgba(2, 22, 33, 0.969), rgba(0, 9, 13, 0.59)),
    url(${bg}), no-repeat, center;
  /* transform: rotate(180deg); */

  width: 100vw;
  max-width: 1440px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 50vh;
`;

const Content = styled.div`
  margin: 70px 0 40px;
  padding: 0 140px;
  display: flex;
  gap: 70px;

  .leftFrame {
    flex: 1 0 31rem;

    .escoImg {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 450px;
        height: 400px;
      }
    }

    h4 {
      color: ${process.env.REACT_APP_SECONDARY_COLOR};
      font-size: 18px;
      font-family: "Coda", cursive;
      letter-spacing: 1.3px;
      line-height: 1.4;
    }
    p {
      margin-top: 30px;
      font-size: 15px;
      color: #4f4f4f;
    }
  }

  .rightFrame {
    flex: 1 0 31rem;
    .secondP {
      margin-top: 30px;
      ul {
        margin-left: 10px;
        li {
          margin-top: 10px;
          span {
            color: ${process.env.REACT_APP_SECONDARY_COLOR};
            font-weight: 600;
          }
        }
      }
    }
    p {
      font-size: 15px;
      color: #4f4f4f;
    }
  }
`;
