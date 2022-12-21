import { Background, Main } from "./styled";

const Container = ({ children }) => {
  return (
    <Background>
      <Main>{children}</Main>
    </Background>
  );
};

export default Container;
