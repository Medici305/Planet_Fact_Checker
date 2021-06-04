import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <DropDown>
      <nav>
        <a href="#">
          <div className="planet">
            <Circle style={{ background: "#fff" }} />
            <h2>Mercury</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <Line />
        <a href="#">
          <div className="planet">
            <Circle style={{ background: "#e8b16f" }} />
            <h2>Venus</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <Line />
        <a href="#">
          <div className="planet">
            <Circle style={{ background: "#5a5ac7" }} />
            <h2>Earth</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <Line />
        <a href="#">
          <div className="planet">
            <Circle style={{ background: "#D83A34" }} />
            <h2>Mars</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <Line />
        <a href="#">
          <div className="planet">
            <Circle style={{ background: "#f2b48b" }} />
            <h2>Jupiter</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <Line />
        <a href="#">
          <div className="planet">
            <Circle style={{ background: "#e8b16f" }} />
            <h2>Saturn</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <Line />
        <a href="#">
          <div className="planet">
            <Circle style={{ background: "#60d0bb" }} />
            <h2>Uranus</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <Line />
        <a href="#">
          <div className="planet">
            <Circle style={{ background: "#2D68F0" }} />
            <h2>Neptune</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </nav>
    </DropDown>
  );
};

const DropDown = styled.div`
  position: absolute;
  left: 0;
  top: 7rem;
  width: 100%;
  color: #fff;
  padding: 5rem 3rem;
  background-color: #070625;
  @media (min-width: 578px) {
    display: none;
  }
  nav {
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;

      .planet {
        flex: 0.5;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
          font-size: 1.6rem;
          letter-spacing: 0.1rem;
          font-weight: 700;
          padding: 0;
          padding-left: 2rem;
          width: 100%;
        }
      }
    }
    svg {
      color: #38384f;
    }
  }
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 1.75rem 0;
  background: #38384f;
`;

export default Menu;
