import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Clock from "./Clock";
import "./index.css";

function App() {
  return (
    <Container>
      <Clock />
      <Header title="Currency calculator" />
      <Form />
    </Container>
  );
}

export default App;
