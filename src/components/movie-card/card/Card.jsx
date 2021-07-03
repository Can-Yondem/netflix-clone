import React from "react";
import "./card.css";
const URL = "https://www.themoviedb.org/t/p/original";

const Card = ({ image }) => {
  return (
    /*Slider içindeki resim.*/
    <div className="card-img">
      <img src={`${URL}${image}`} alt="" />
    </div>
  );
};

export default Card;
