import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Planet from "../components/Planet";
import bg from "../Images/sapce4.jpg";

const Home = () => {
  return (
    <StyleHome>
      <Nav />
      <Planet />
    </StyleHome>
  );
};
const StyleHome = styled.div`
  height: 100vh;
  color: #fff;
  /* background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
`;

export default Home;
