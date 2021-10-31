import React from "react";
import LoadingSpiner from "../../LoadingSpiner/LoadingSpiner";
import Baner from "../Baner/Baner";
import Gallery from "../Gallery/Gallery";
import Magazine from "../Magazine/Magazine";
import Packeges from "../Packages/Packeges";
// import LoadingSpiner from "./../../LoadingSpiner/LoadingSpiner";

const Home = () => {
  return (
    <div>
      <Baner></Baner>
      <Packeges></Packeges>
      <Gallery></Gallery>
      <Magazine></Magazine>
    </div>
  );
};

export default Home;
