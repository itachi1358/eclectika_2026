  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { useEffect, useRef } from "react";

  import First from "./components/First";
  import Intro from "./components/Intro";
  import Landing from "./components/Landing";
  import About_Page from "./pages/About_Page";
  import Team_Page from "./pages/Team/Team_Page";
  import "./App.css"; // or wherever your sphere CSS lives
  import OurTheme from "./components/OurTheme";
import Merch from "./Merch/Merch";

  function App() {
    const sphereRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (sphereRef.current) {
          sphereRef.current.style.left = `${e.clientX}px`;
          sphereRef.current.style.top = `${e.clientY}px`;
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <BrowserRouter>
        {/* GLOBAL CURSOR SPHERE */}
        {/* <div className="sphere" ref={sphereRef}></div> */}

        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/About" element={<About_Page/>}/>
          <Route path="/Team" element={<Team_Page/>}/>
          <Route path="/Merch" element={<Merch/>}/>
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
