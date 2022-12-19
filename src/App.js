import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import "./index.css";

function App() {
  return (
    <Container>
      <Header title="Currency calculator" />
      <Form />
    </Container>
  );
}

export default App;
