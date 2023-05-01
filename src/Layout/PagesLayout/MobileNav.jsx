import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const MobileNavComponent = styled.div`
    display: none;
    .mobileCloseBtn {
      position: relative;

      svg {
        position: absolute;
        top: 25px;
        right: 25px;
      }
      /* position: absolute; */

      svg {
        font-size: 40px;
        color: #38b6ff;
        cursor: pointer;
      }
    }
    .navLinks {
      position: absolute;
      margin-top: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .links {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
        a {
          text-decoration: none;
          font-size: 17px;
          color: #38b6ff;
          font-weight: 600;
          font-family: "Coda", cursive;
        }
      }
    }

    @media only screen and (max-width: 480px) {
      display: block;
      position: fixed;
      z-index: 5399393939390000000000000;
      width: 100%;
      height: 100vh;
      max-height: 100vh;
      top: 0;
      overflow: hidden;
      max-height: 100vh;
      /* display: none; */
      transform: translateX(-100%);
      background: #fff;
    }

    animation: ${showNav === true
      ? "slide-left-to-right .5s forwards"
      : "slide-right-to-left .5s forwards"};

    /* Define the keyframes for the animation */
    @keyframes slide-left-to-right {
      0% {
        transform: translateX(-100%);
      }
      100% {
        display: block;
        transform: translateX(0%);
      }
    }
    @keyframes slide-right-to-left {
      0% {
        display: block;
        transform: translateX(0%);
      }
      100% {
        display: none;
        transform: translateX(-100%);
      }
    }
  `;
  const links = [
    { name: "Home", path: "/", id: "link5" },
    { name: "About Us", path: "/about", id: "link1" },
    { name: "What we do", path: "/what-we-do", id: "link2" },
    {
      name: "Industries & Solutions",
      path: "/technolgies-and-solutions",
      id: "link3",
    },
    {
      name: "Contact",
      path: "/contact",
      id: "link5",
    },
  ];
  return (
    <>
      <OpenMenu>
        <RiMenu3Fill
          onClick={() => {
            setShowNav(true);
          }}
        />
      </OpenMenu>
      <MobileNavComponent>
        <div className="mobileCloseBtn">
          <IoClose
            onClick={() => {
              setShowNav(false);
            }}
          />
          <div className="navLinks">
            {links.map((link, idx) => {
              return (
                <div className="links">
                  <Link to={link.path} key={link.id}>
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </MobileNavComponent>
    </>
  );
};

export default MobileNav;

const OpenMenu = styled.div`
  display: none;
  position: absolute;
  top: 25px;
  right: 25px;
  /* z-index: 53993s93939390000000000000; */

  svg {
    color: #fff;
    cursor: pointer;
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    display: block;
  }
`;
