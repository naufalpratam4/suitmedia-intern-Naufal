import React from "react";
import Navbar from "../components/section/navbar/Navbar";
import Banner from "../components/section/banner/Banner";
import ListPost from "../components/section/list post/ListPost";
import { useState, useEffect } from "react";
import CardList from "../components/section/card/CardList";
import axios from "axios";
function LandingPage() {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("src/api/APICard.json");
        setCoinsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <CardList coinsData={coinsData} />
    </div>
  );
}

export default LandingPage;
