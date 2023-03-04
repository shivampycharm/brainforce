import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Data from "./Data";

import "./../Style/home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Data />
    </div>
  );
}

export default Home;
