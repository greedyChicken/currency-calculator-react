import "./style.css";

const Footer = ({ result }) => {
  return (
    <p class="footer">
      Result: <strong>{result}</strong>
    </p>
  );
};

export default Footer;
