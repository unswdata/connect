import "./App.css";
import Navbar from "./Navbar";
import Pending from "./pages/Pending";
import Past from "./pages/Past";
import Home from "./pages/Home";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/pending":
      Component = Pending;
      break;
    case "/past":
      Component = Past;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>
    </>
  );
}

export default App;
