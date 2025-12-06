import React from "react";
import dataJson from "./data.json";
import "./features.scss";


export default function Features({ item, id }) {
  const { features, promo } = dataJson;


  return (
    <>
      <div className="card-container">
        <img src={`/images/${item.icon}`} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
  
    </>
  );
}
