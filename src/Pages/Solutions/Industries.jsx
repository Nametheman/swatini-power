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
      name: "Hospital",
      id: "i1",
      icon: <FaHospitalAlt />,
      details:
        "Solar panels are designed to harness the energy from the sun's rays and convert it into usable electricity through a process known as the photovoltaic effect. The basic structure of a solar panel consists of two semiconductor layers - the top thin layer and the bottom thick layer.",
    },
    {
      name: "Universities",
      id: "i2",
      icon: <FaUniversity />,
      details:
        "When sunlight hits the top layer of the solar panel, it knocks electrons loose from the atoms in the material. These free electrons flow towards the bottom layer of the panel, which is positively charged, creating a flow of electricity. The top layer of the panel is made up of photovoltaic cells, which are made of materials such as silicon, that are able to absorb and convert sunlight into electricity.",
    },
    {
      name: "Retail",
      id: "i3",
      icon: <FaCartArrowDown />,
      details:
        "Utilizing solar energy during daytime can power machinery and equipment, reducing operating costs and increasing production efficiency. This renewable energy source is abundant and can be harnessed effectively. Take advantage of it to improve your business sustainability.",
    },
    {
      name: "Apartments",
      id: "i4",
      icon: <GiFamilyHouse />,
      details:
        "Solar energy is an untapped, abundant and clean renewable resource. It can be used to power machinery, heat water and can lead to significant monthly cost savings. Take advantage of this natural resource to increase sustainability and financial benefits.",
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
    color: aliceblue;
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
    color: aliceblue;
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
