import React from "react";
import styled from "styled-components";
import { BsPhoneVibrate, BsMailbox, BsWhatsapp } from "react-icons/bs";
// import logo from "../../Assets/Images/skin_logo.png";

const Footer = () => {
  return (
    <Container>
      <div className="masterRow">
        <div className="col">
          <div className="row">
            <h3 className="logo">SWATINI POWER</h3>
            {/* <img src={logo} alt="" /> */}
            <p>
              Power unlock opportunities and potentials <br /> for individuals,
              communities, industries, <br /> economies, and societies
              worldwide, propelling <br /> progress and transforming the world
              as we know it.
            </p>
            <p>
              11, Itelorun Close, off Alhaji-Jimoh Street, <br /> Adeniyi-Jones,
              Ikeja, Lagos, Nigeria.
            </p>

            <div className="info">
              <BsPhoneVibrate size={20} />
              <p>+234-(803)-390-7077</p>
            </div>
            <div className="info">
              <BsWhatsapp size={20} />
              <p>+234-(911)-230-1991</p>
            </div>
            <div className="info">
              <BsMailbox size={20} />
              <p>business@swatinipower.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <h3>TECHNOLOGY PARTNERS</h3>
        <ul>
          <li>Enel Green Power</li>
          <li>Schneider Electric</li>
          <li>Open Solar</li>
          <li>Wattics</li>
          <li>PowerRent</li>
        </ul>
      </div>
      <div className="products">
        <h3>PRODUCTS</h3>

        <ul>
          <li>Energy-as-a-Service</li>
          <li>On-site power generation</li>
          <li>Generator Rentals</li>
          <li>Battery Energy Storage</li>
          <li>Energy Measurement</li>
        </ul>
      </div>
      <div className="products">
        <h3>SECTORS</h3>

        <ul>
          <li>Hospitals</li>
          <li>Universities</li>
          <li>Retails</li>
          <li>Transportation Hub</li>
        </ul>
      </div>
      {/* <div>
        <h3>SOCIALS</h3>
      </div> */}
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
  width: 100vw;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    padding: 50px;
    max-width: 100vw;
  }

  /* flex-wrap: wrap; */
  h3 {
    font-size: 15px;
  }

  .logo {
    color: #0e76b3;
    font-size: 30px !important;
  }
  .masterRow {
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */

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

      .products {
        h3 {
          @media screen and (max-width: 480px) {
            /* text-align: center; */
            margin-top: 40px;
          }
        }
        ul {
          margin-top: 20px;
          list-style: none;
          li {
            font-size: 13px;
            margin-bottom: 10px;
            @media screen and (max-width: 480px) {
              /* text-align: center; */
            }
          }
        }
      }
    }
  }
  .products {
    h3 {
      @media screen and (max-width: 480px) {
        /* text-align: center; */
        margin-top: 40px;
      }
    }
    ul {
      margin-top: 20px;
      list-style: none;
      li {
        font-size: 13px;
        margin-bottom: 10px;
        @media screen and (max-width: 480px) {
          /* text-align: center; */
        }
      }
    }
  }
`;
