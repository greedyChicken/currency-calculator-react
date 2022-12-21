import styled from "styled-components";
import background from "../images/0000.png";

export const Background = styled.div`
  background-image: url("${background}");
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
  color: white;
  text-align: center;
  width: 100%;
  background-color: rgb(247, 118, 143);
  border-radius: 20px;
  font-size: 20px;
`;
