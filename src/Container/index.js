import "./style.css";

const Container = ({ children }) => {
  return (
    <div className="background">
      <main className="container">{children}</main>
    </div>
  );
};

export default Container;
