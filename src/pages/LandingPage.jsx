import React from "react";
import Navbar from "../components/section/navbar/Navbar";
import Banner from "../components/section/banner/Banner";
import ListPost from "../components/section/list post/ListPost";

import CardList from "../components/section/card/CardList";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ListPost />
      <CardList />
    </div>
  );
}

export default LandingPage;
