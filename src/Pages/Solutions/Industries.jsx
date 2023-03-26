import React, { useState } from "react";
import styled from "styled-components";
// import Card from "./Card";
import { FaUniversity, FaHospitalAlt, FaCartArrowDown } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import ReactCardFlip from "react-card-flip";

const Industries = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const industries = [
    {
      name: "Hospitals",
      id: "i1",
      icon: <FaHospitalAlt />,
      details:
        "Hospitals can benefit from reduced energy costs, improved energy efficiency, and lower maintenance and repair costs. Solar energy can also help the hospital reduce its carbon footprint and achieve sustainability goal. Overall, solar power generation can provide a cost-effective energy solution to large hospitals looking to manage their energy needs and achieve energy efficiency goals.",
    },
    {
      name: "Universities",
      id: "i2",
      icon: <FaUniversity />,
      details:
        "Universities have large energy demands due to their size and the number of students, faculty, and staff. Solar power can help universities reduce their energy costs by providing access to renewable energy sources and energy-efficient technologies. This can lead to significant cost savings over time",
    },
    {
      name: "Retails",
      id: "i3",
      icon: <FaCartArrowDown />,
      details:
        "By going solar, retails can reduce their energy bills, generate additional revenue through government incentives, enhance their reputation as eco-friendly businesses, and future-proof their operations against rising energy costs while contributing to a cleaner, more sustainable future.",
    },
    {
      name: "Apartments",
      id: "i4",
      icon: <GiFamilyHouse />,
      details:
        "Apartments can install solar panels on their rooftops to generate electricity from the sun. This can help offset the energy consumption of common areas such as hallways, elevators, and lighting. Rooftop solar can also be used to power individual units, depending on the design and size of the solar installation.",
    },
  ];
  return (
    <Container>
      <h3 className="title">INDUSTRIES</h3>
      <div className="grid">
        <div
          onMouseEnter={() => {
            setIsFlipped(true);
          }}
          onMouseLeave={() => {
            setIsFlipped(false);
          }}
        >
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            flipSpeedBackToFront={1}
            flipSpeedFrontToBack={1}
          >
            <Card>
              <div className="icon">{industries[0].icon}</div>
              <h3>{industries[0].name}</h3>
              <a href="#">Learn More</a>
            </Card>
            <Card2>
              <p>{industries[0].details}</p>
            </Card2>
          </ReactCardFlip>
        </div>
        <div
          onMouseEnter={() => {
            setIsFlipped2(true);
          }}
          onMouseLeave={() => {
            setIsFlipped2(false);
          }}
        >
          <ReactCardFlip
            isFlipped={isFlipped2}
            flipDirection="horizontal"
            flipSpeedBackToFront={1}
            flipSpeedFrontToBack={1}
          >
            <Card>
              <div className="icon">{industries[1].icon}</div>
              <h3>{industries[1].name}</h3>
              <a href="#">Learn More</a>
            </Card>
            <Card2>
              <p>{industries[1].details}</p>
            </Card2>
          </ReactCardFlip>
        </div>
        <div
          onMouseEnter={() => {
            setIsFlipped3(true);
          }}
          onMouseLeave={() => {
            setIsFlipped3(false);
          }}
        >
          <ReactCardFlip
            isFlipped={isFlipped3}
            flipDirection="horizontal"
            flipSpeedBackToFront={1}
            flipSpeedFrontToBack={1}
          >
            <Card>
              <div className="icon">{industries[2].icon}</div>
              <h3>{industries[2].name}</h3>
              <a href="#">Learn More</a>
            </Card>
            <Card2>
              <p>{industries[2].details}</p>
            </Card2>
          </ReactCardFlip>
        </div>
        <div
          onMouseEnter={() => {
            setIsFlipped4(true);
          }}
          onMouseLeave={() => {
            setIsFlipped4(false);
          }}
        >
          <ReactCardFlip
            isFlipped={isFlipped4}
            flipDirection="horizontal"
            flipSpeedBackToFront={1}
            flipSpeedFrontToBack={1}
          >
            <Card>
              <div className="icon">{industries[3].icon}</div>
              <h3>{industries[3].name}</h3>
              <a href="#">Learn More</a>
            </Card>
            <Card2>
              <p>{industries[3].details}</p>
            </Card2>
          </ReactCardFlip>
        </div>
      </div>
    </Container>
  );
};

export default Industries;
const Container = styled.div`
  margin: 40px 0;
  .title {
    text-align: center;
  }
  .grid {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  width: 290px;
  height: 280px;
  padding: 35px 20px;
  /* border: 1px solid; */
  margin-top: 30px;
  background-color: #3c3d3d;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  .icon {
    margin-top: 30px;
    svg {
      font-size: 40px;
      color: #15a2f4;
    }
  }
  h3 {
    color: #15a2f4;
    font-family: "Coda", cursive;
    margin-top: 10px;
    font-size: 40px;
    margin-bottom: 14px;
  }
  a {
    text-decoration: none;
    color: aliceblue;
    font-size: 12px;
  }
  p {
    font-size: 14px;
    color: #15a2f4;
  }
`;
const Card2 = styled.div`
  width: 290px;
  height: 280px;
  padding: 35px 20px;
  /* border: 1px solid; */
  margin-top: 30px;
  border-radius: 10px;
  background-color: ${process.env.REACT_APP_PRIMARY_COLOR};
  cursor: pointer;

  .icon {
    svg {
      font-size: 40px;
      color: ${process.env.REACT_APP_PRIMARY_COLOR};
    }
  }
  h3 {
    color: aliceblue;
    font-family: "Coda", cursive;
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 14px;
  }
  a {
    text-decoration: none;
    color: aliceblue;
    font-size: 12px;
  }
  p {
    font-size: 14px;
    color: aliceblue;
  }
`;
