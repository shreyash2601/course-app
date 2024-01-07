import React from "react";
import Featured from "./Featured";
import Carousal from "./Carousal";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Carousal />
      <Featured />
      <About />
    </div>
  );
};

export default Home;
