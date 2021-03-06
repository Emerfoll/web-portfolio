import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      /> */}
      
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
