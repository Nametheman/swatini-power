import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [changeNav, setChangeNav] = useState(false);
  const links = [
    { name: "About Us", path: "/about", id: "link1" },
    { name: "What we do", path: "/what-we-do", id: "link2" },
    {
      name: "Industries & Solutions",
      path: "/technolgies-and-solutions",
      id: "link3",
    },
    // {
    //   name: "PowerRent",
    //   path: "/power-rent",
    //   id: "link4",
    // },
    {
      name: "Contact",
      path: "/contact",
      id: "link5",
    },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 85) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  //styles to change Navbar

  const Navigation = styled.nav`
    width: 100%;
    /* max-width: 1440px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 40px 60px;
    position: fixed;
    align-items: center;
    top: 0;
    z-index: 2;
    background-color: ${changeNav ? "#fff" : ""};
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 480px) {
      display: none;
    }

    .logo-section {
      a {
        color: ${changeNav ? "#094e75" : "#fff"};
        font-family: "Squada One", cursive;
        font-size: 28px;
        text-decoration: none;
      }
    }

    .link-section {
      a {
        margin-right: 30px;
        text-decoration: none;
        color: ${changeNav ? "#094e75" : "#fff"};
      }
    }
  `;

  return (
    <Navigation>
      <div className="logo-section">
        <Link to="/">Swatini Power</Link>
      </div>
      <div className="link-section">
        {links.map((link) => {
          return <Link to={link.path}>{link.name}</Link>;
        })}
        <a href="https://powerrent.swatinipower.com" target="_blank">
          PowerRent
        </a>
      </div>
    </Navigation>
  );
};

export default Navbar;
