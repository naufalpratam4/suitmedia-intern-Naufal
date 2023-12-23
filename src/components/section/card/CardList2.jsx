import React from "react";
import CardComponent from "../../card/CardComponent";

const CardList2 = ({ coinsData }) => {
  return (
    <div className="card_list">
      {Array.isArray(coinsData) && coinsData.length > 0 ? (
        coinsData.map((coin) => (
          <CardComponent
            key={coin.id}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
          />
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default CardList2;
