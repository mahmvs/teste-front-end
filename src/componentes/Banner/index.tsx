import React from "react";
import "./styles.sass";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src="./src/assets/Rectangle250.png" alt="" />
      </div>
      <div className="banner-content">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>
          <span>50% Off</span> nos produtos{" "}
        </h2>
        <button className="product-button">Ver produto</button>
      </div>
    </div>
  );
};

export default Banner;
