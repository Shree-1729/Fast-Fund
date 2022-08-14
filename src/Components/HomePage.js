
import { Component, useState, useEffect } from "react";
import ANavbar from "./ANavbar";
import CFeaturedMain from "./CFeaturedMain";
import HRaisedFund from "./HRaisedFund";
import GFooter from "./GFooter";
import SuccessStories from "./SuccessStories";
import BTemplate from "./BTemplate";
import Register from "./Register";
function HomePage() {
  return (
    <div>
      <ANavbar />
      <BTemplate />
      <CFeaturedMain />
      <Register/>
      <HRaisedFund />
      <GFooter />
    </div>
  );
}

export default HomePage;
