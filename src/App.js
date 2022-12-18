import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <main class="container">
      <Header title="Currency calculator" />
      {/* <form action="" class="form">
        <p>
          <label for="amount">
            <input
              class="form__input js-amount"
              type="number"
              name="amount"
              min="0"
              step="0.01"
              placeholder="Currency amount"
            />
          </label>
        </p>
        <p>
          <label class="selectCurrency" for="fromCurrency">
            From:
            <select class="js-fromCurrency" type="number" name="fromCurrency">
              <option value="pln">PLN</option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
          </label>
          <label class="selectCurrency" for="toCurrency">
            To:
            <select class="js-toCurrency" type="number" name="toCurrency">
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="pln">PLN</option>
            </select>
          </label>
        </p>
      </form> */}
      <Form />
      {/* <p class="footer"> */}
      {/* Result: <strong class="js-result"></strong> */}
      {/* </p> */}
      <Footer />
    </main>
  );
}

export default App;
