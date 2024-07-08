import React from "react";
import Navbar from "./components/Navbar"
// import Nav from './Nav'
import Home from './components/Home'
import SocialLinks from "./components/SocialLinks";
import About  from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiecnce from "./components/Experiecnce";
function App() {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiecnce/>

      <SocialLinks/>
      {/* <Nav/> */}
      </div>
  );
}

export default App;
