import React from "react";
import styled from "styled-components";

const Models = () => {
  return (
    <Container>
      <LeftFrame>
        <h3>ESCO model</h3>
        <p>Find out more about financing options for private clients.</p>
        <button>Learn More About ESCO</button>
      </LeftFrame>
      <RightFrame>
        <h3>PPP model</h3>
        <p>Find out more about financing options for the public sector.</p>
        <button>Learn More About PPP</button>
      </RightFrame>
    </Container>
  );
};

export default Models;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

const LeftFrame = styled.div`
  background-color: #f1f2f2;
  flex: 1;
  text-align: center;
  padding: 0 0 80px;
  /* display: flex; */

  button {
    text-transform: uppercase;
    margin-top: 30px;
    background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
    color: #fff;
    border: none;
    outline: none;
    padding: 15px 80px;
    cursor: pointer;
  }
`;

const RightFrame = styled.div`
  background-color: #f1f2f2;
  flex: 1;
  text-align: center;
  padding: 0 0 80px;

  button {
    text-transform: uppercase;
    margin-top: 30px;
    background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
    color: #fff;
    border: none;
    outline: none;
    padding: 15px 80px;
    cursor: pointer;
  }
`;
