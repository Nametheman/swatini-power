import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import service1 from "../../Assets/Images/commercial_solar.jpeg";
import service2 from "../../Assets/Images/batterystorage.jpeg";
import service3 from "../../Assets/Images/energy_mgt.jpeg";

const Modal = ({ isShow, show, id }) => {
  return ReactDOM.createPortal(
    <Container
      onClick={() => {
        isShow(false);
      }}
    >
      <ModalContainer>
        {/* <CloseButton
          onClick={() => {
            isShow(false);
          }}
        >
          <GrFormClose />
        </CloseButton> */}
        {id === "service1" ? (
          <div className="Head">
            <h3>Commercial Solar Installation</h3>
            <div className="content1">
              <img src={service1} alt="" />

              <p>
                Looking to reduce your organization's environmental impact while
                also cutting down on electricity costs? With a commercial solar
                installation, you can tap into the abundant energy of the sun to
                minimize your carbon footprint and decrease your reliance on
                traditional electrical utilities. Plus, by leveraging solar
                power during peak demand periods, you can enjoy significant
                savings on your energy bills while also contributing to a more
                sustainable future. <br /> <br /> Solar can save you big money.
                Our experts can help you identify the best location and plan to
                maximize your savings. Commercial solar power is the future of
                energy. The installation of a solar panel system can lead to
                savings on energy bills and making your company become energy
                efficient and a positive balance sheet. <br /> <br />
                ✅Get your business off the grid <br /> ✅Decrease your carbon
                footprint <br /> ✅Smart investment for your business and the
                planet
              </p>
            </div>
          </div>
        ) : id === "service2" ? (
          <div className="Head">
            <h3>Battery Energy Storage</h3>
            <div className="content1">
              <img src={service2} alt="" />
              <p>
                Our energy storage solutions enable businesses to store excess
                energy during periods of low demand and discharge it during peak
                periods, resulting in significant cost savings and improved
                energy efficiency. By strategically managing electricity usage,
                businesses can take advantage of lower prices and avoid higher
                costs during peak periods. <br /> <br />
                Introducing an advanced energy storage system with sophisticated
                software that can help your business save money on utility
                bills. Our technology can store low-cost power during off-peak
                hours and use it when electricity prices and utility rates are
                at their highest. This smart solution is designed to maximize
                your savings by determining the most profitable times to buy and
                sell electricity. Invest in our smart energy storage system to
                streamline your energy usage and boost your profits. <br />{" "}
                <br />
                ✅Backup power for your facility <br /> ✅Store and deliver
                power efficiently <br /> ✅Reduce utility costs & carbon
                footprint
              </p>
            </div>
          </div>
        ) : id === "service3" ? (
          <div className="Head">
            <h3>Energy Management Systems</h3>
            <div className="content1">
              <img src={service3} alt="" />
              <p>
                We can provide energy management systems that use battery
                storage systems to optimize energy use and reduce costs. Our
                team can design customized energy management systems that meet
                the unique needs of the client, such as scheduling energy use
                during times of low electricity prices or automatically
                switching to battery power during peak demand periods. <br />{" "}
                <br />
                Experience the power of wireless sensors that can intelligently
                monitor your facility and transform the way you consume energy.
                Our advanced power monitoring system tracks your energy usage,
                identifies trends, and empowers you to take action to reduce
                your consumption. With detailed insights into electricity usage
                at the device or circuit level, you can accurately pinpoint
                which equipment consumes the most energy and when. Our
                commercial energy monitoring system simplifies the process of
                analyzing and understanding energy data from all the equipment
                in your facility, enabling you to make informed decisions and
                drive greater energy efficiency. <br /> <br />
                ✅Track energy consumption data <br /> ✅Prevent costly
                equipment downtime Increase energy efficiency <br /> ✅Track
                energy usage across multiple locations & sites
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </ModalContainer>
    </Container>,
    document.getElementById("modal")
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  width: 80%;
  height: 70%;
  max-height: 85%;
  overflow: scroll;
  border-radius: 10px;

  .Head {
    h3 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 25px;
      font-family: "Coda", cursive;
    }
    .content1 {
      display: flex;
      max-height: 85%;

      @media screen and (max-width: 480px) {
        flex-direction: column;
      }
      img {
        width: 500px;
        height: 380px;
        border-radius: 10px;
        @media screen and (max-width: 480px) {
          width: 300px;
          height: 200px;
        }
      }
      p {
        @media screen and (max-width: 480px) {
          font-size: 13px;
          margin-top: 30px;
        }
        flex: 1;
        padding: 8px 20px;
      }
    }
  }
`;
// const CloseButton = styled.div`
//   position: absolute;
//   right: -20px;
//   top: -30px;
//   padding: 10px;
//   background-color: #fff;
//   border-radius: 5px;
//   z-index: 200303030303030033003;
//   cursor: pointer;
//   @media screen and (max-width: 480px) {
//     right: -5px;
//     top: -5px;
//   }
// `;
