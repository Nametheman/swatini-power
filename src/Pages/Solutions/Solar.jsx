import React from "react";
import styled from "styled-components";
import bg from "../../Assets/Images/solutionsabanner.jpeg";

const Solar = () => {
  return (
    <Container>
      <div className="cardWrapper">
        <div className="card">
          <h3>
            Install solar panels and become self-sufficient in power generation,
            reduce your energy cost and take your business off the unreliable
            traditional power grid.
          </h3>
          <p>
            Installing solar panels can provide numerous benefits to society,
            economy, and cost. Solar energy is a renewable and clean source of
            power that can reduce our reliance on fossil fuels, decrease air
            pollution, and combat climate change. It can also create jobs and
            stimulate economic growth in the renewable energy sector while
            saving money on electricity bills for homeowners and businesses.
            Overall, the installation of solar panels is a wise investment for a
            sustainable future.
          </p>

          <ul>
            <li>
              ✅ Commercial solar is the future for businesses and industrial
              energy users.
            </li>
            <li>✅ Take your business off the grid today.</li>
            <li>✅ Come to Swatini, We Design. We Build. We Finance.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Solar;
const Container = styled.div`
  background: linear-gradient(rgba(14, 14, 14, 0.511), rgba(0, 9, 13, 0.65)),
    url(${bg}), no-repeat, center;
  height: 80vh;
  width: 100vw;
  /* max-width: 1440px; */
  max-height: 800px;
  margin: 120px 0;

  .cardWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    padding-right: 70px;
    position: relative;

    @media screen and (max-width: 480px) {
      justify-content: center;
    }
    .card {
      background-color: #fff;
      width: 550px;
      padding: 40px;
      border-radius: 3px;
      @media screen and (max-width: 480px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
      }
      /* margin-top: 50px; */

      h3 {
        font-family: "Coda", cursive;
        margin-bottom: 20px;
      }
      p {
        font-size: 14px;
        font-family: "Coda", cursive;
        margin-bottom: 20px;
      }

      ul {
        list-style: none;
        font-family: "Coda", cursive;
        li {
          margin-bottom: 10px;
        }
      }
    }
  }
`;
