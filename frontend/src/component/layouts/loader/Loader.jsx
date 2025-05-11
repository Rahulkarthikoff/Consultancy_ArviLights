import React from "react";
import { ReactComponent as CricketBall } from "../../../Image/Loader-svg/LoaderBlackk.svg";
// import arvilight from "../../../Image/Loader-svg/arvilight.svg";
import "./Loader.css";

const Loader = () => (
  <div className="cricket-ball-loader">
    <CricketBall className="spinner" />
  </div>
);

export default Loader;



