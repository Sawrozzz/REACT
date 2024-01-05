import "./App.css";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Education from "./Education";
import Nav from "./Nav";
import About from "./About";

function App() {
  return (
    <>
      <div className="mainDiv">
       <Header />
       <Nav />
       <Home />
       <Education />
       <About />
       <Contact />
      </div>
    </>
  );
}

export default App;
