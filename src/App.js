import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <Container>
      <Header title="Currency calculator" />
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
