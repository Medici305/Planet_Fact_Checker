import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <StyleNav>
      <h2>The Planets</h2>
      <ul>
        <li>
          <a href="#">Mercury</a>
        </li>
        <li>
          <a href="#">Venus</a>
        </li>
        <li>
          <a href="#">Earth</a>
        </li>
        <li>
          <a href="#">Mars</a>
        </li>
        <li>
          <a href="#">Jupiter</a>
        </li>
        <li>
          <a href="#">Saturn</a>
        </li>
        <li>
          <a href="#">Uranus</a>
        </li>
        <li>
          <a href="#">Neptune</a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setToggle(!toggle)}
        size="3x"
        icon={faBars}
      />
      {toggle && <Menu />}
    </StyleNav>
  );
};

const StyleNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #38384f;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;
  }
  @media (max-width: 578px) {
    flex-direction: row;
    padding: 0 2rem;
  }
  h2 {
    padding-left: 2rem;
    text-transform: uppercase;
    align-content: center;
    align-self: center;
    margin: 0;
    @media (max-width: 768px) {
      padding: 1rem 0 2rem 0;
    }
    @media (max-width: 768px) {
      font-family: "Spartan";
      padding: 0;
    }
  }
  ul {
    display: flex;
    flex: 0.6;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    @media (max-width: 768px) {
      padding: 2rem 0 1rem 0;
      width: 75%;
    }
    @media (max-width: 578px) {
      display: none;
    }
    a {
      text-decoration: none;
    }
  }
  svg {
    cursor: pointer;
    color: #38384f;
    @media (min-width: 578px) {
      display: none;
    }
  }
`;

export default Nav;
