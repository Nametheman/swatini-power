import React from "react";
import styled from "styled-components";

const Card = ({ name, icon }) => {
  return (
    <Container>
      <div className="icon">{icon}</div>
      <h3>{name}</h3>
      <a href="#">Learn More</a>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 220px;
  height: 190px;
  padding: 35px 20px;
  /* border: 1px solid; */
  margin-top: 30px;
  background-color: #3c3d3d;
  cursor: pointer;

  .icon {
    svg {
      font-size: 40px;
      color: #7ebde1;
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
`;
