import styled from "styled-components";

export const StylePlanet = styled.div`
  //border: 2px solid #fff;
  margin: 5rem 15rem;
`;

export const Content = styled.div`
  display: flex;
`;

export const Stats = styled.div`
  //border: 2px solid white;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
`;

export const Box = styled.div`
  flex: 0.23;
  border: 1px solid #38384f;
  padding: 1.5rem 2rem;
  text-transform: uppercase;
  span {
    color: #838391;
    font-weight: 800;
  }
`;

export const Image = styled.div`
  //border: 2px solid red;
  flex: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30%;
  }
`;

export const Text = styled.div`
  flex: 0.25;
  //border: 2px solid green;
`;

export const Description = styled.div`
  span {
    color: #838391;
  }
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  button {
    span {
      color: #838391;
      margin-right: 2rem;
    }
  }
`;
