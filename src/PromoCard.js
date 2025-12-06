import React from "react";
import dataJson from "./data.json";
import "./promoCard.scss";

const PromoCard = () => {
  const { promo } = dataJson;
  console.log(promo);
  return (
    promo && (
      <div className="promo-main-container">
        {promo.titleBlocks.map((item, index) => {
          return (
            <div className="promo-flex-container" key={index}>
              <div className="promo-flex-inner">
                <p className="promo-heading">{item.heading}</p>
                <p className="promo-subtitle">{item.sub}</p>
              </div>
              
            </div>
          );
        })}

        
              <button>Get Started Now</button>
      </div>
    )
  );
};

export default PromoCard;
