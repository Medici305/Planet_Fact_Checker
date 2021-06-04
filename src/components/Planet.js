import React from "react";
import {
  StylePlanet,
  Content,
  Image,
  Text,
  Description,
  Buttons,
  Stats,
  Box,
} from "../style";
import mercury from "../Images/planet-mercury.svg";

const Planet = () => {
  return (
    <StylePlanet>
      <Content>
        <Image>
          <img src={mercury} alt="mercury" />
        </Image>
        <Text>
          <Description>
            <h1>Mercury</h1>
            <p>
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </p>
            <span>Source: Wikipedia</span>
          </Description>
          <Buttons>
            <button>
              <span>01</span> Overview
            </button>
            <button>
              <span>02</span> Internal Structure
            </button>
            <button>
              <span>03</span> Surface Geology
            </button>
          </Buttons>
        </Text>
      </Content>
      <Stats>
        <Box>
          <span>Rotation Time</span>
          <h2>58.6 Days</h2>
        </Box>
        <Box>
          <span>Revolution Time</span>
          <h2>87.97 Days</h2>
        </Box>
        <Box>
          <span>Radius</span>
          <h2>2,439 KM</h2>
        </Box>
        <Box>
          <span>Average Temp</span>
          <h2>430 C</h2>
        </Box>
      </Stats>
    </StylePlanet>
  );
};

export default Planet;
