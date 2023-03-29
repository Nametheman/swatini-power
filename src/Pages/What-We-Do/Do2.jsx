import React from "react";
import styled from "styled-components";
import image from "../../Assets/Images/woman.jpeg";

const Do2 = () => {
  return (
    <Container data-aos="zoom-in-down">
      <p>
        Our goal is to identify, finance and implement the right solutions that
        will allow our clients to minimize their energy costs, optimize their
        production processes where applicable and achieve the highest possible
        amount of savings. <br /> <br /> Resalta can reduce your energy costs in
        fields as varied as heating, cooling, electricity consumption, lighting,
        steam production and many more.{" "}
      </p>
      <img src={image} alt="" />
    </Container>
  );
};

export default Do2;
const Container = styled.div`
  display: flex;
  padding: 40px 100px;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px;
    align-items: center;
  }

  p {
    flex: 0.9 0 8rem;
    padding: 0 40px;
    color: rgba(14, 14, 14, 0.639);
    @media screen and (max-width: 480px) {
      font-size: 15px;
      padding: 0 20px;
    }
  }

  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    @media screen and (max-width: 480px) {
      width: 90%;
      height: 200px;
      object-fit: cover;
      margin-top: 20px;
      border-radius: 10px;
    }
  }
`;
