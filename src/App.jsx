import { useEffect, useState } from "react";
import axios from "axios";
import CardList2 from "./components/section/card/CardList2";
import CardList from "./components/section/card/CardList";
import LandingPage from "./pages/LandingPage";

function App() {
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
    <>
      {/* <CardList2 coinsData={coinsData} /> */}
      <LandingPage />
      {/* <CardList coinsData={coinsData} /> */}
    </>
  );
}

export default App;
