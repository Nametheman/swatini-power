import React from "react";
import styled from "styled-components";
import { BsPhoneVibrate, BsMailbox } from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <div className="masterRow">
        <div className="col">
          <div className="row">
            <h3>SWATINI</h3>
            <p>
              11, Itelorun Cl, off Alhaji-Jimoh Street, <br /> Adeniyi-Jones,
              Ikeja, Lagos.
            </p>

            <div className="info">
              <BsPhoneVibrate size={20} />
              <p>+234-(803)-390-7077</p>
            </div>
            <div className="info">
              <BsMailbox size={20} />
              <p>business@swatinipower.com</p>
            </div>
          </div>
          <div className="row">
            <h3>CERTIFICATES</h3>
          </div>
        </div>
      </div>
      <div>
        <h3>SOCIALS</h3>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 50px 130px 30px;
  /* margin-top: 40px; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h3 {
    font-size: 15px;
  }

  .masterRow {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .col {
      display: flex;
      flex-wrap: wrap;

      .row {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-right: 100px;

        h3 {
          font-size: 15px;
        }
        .info {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 10px;

          p {
            font-size: 14px;
            font-weight: 300;
            color: #f3f2f2;
          }
        }
      }
    }
  }
`;
