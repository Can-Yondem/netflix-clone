import React, {useState} from "react";
import "./card.css";
import Modal from "../../modal/Modal";
const URL = "https://www.themoviedb.org/t/p/original";

const Card = ({ image, overview, title, date, vote, genre}) => {
const [isOpen,setIsOpen] = useState(false);

const openModal = () => {
  setIsOpen(!isOpen);
}

  return (
    /*Slider içindeki resim.*/
    <>
    <div className="card-img" onClick={openModal}>
      <img src={`${URL}${image}`} alt="" />
    </div>
    {isOpen && <Modal image={image} overview={overview} title={title} date={date} vote={vote} openModal={openModal} genre={genre}/>}
    </>
  );
};

export default Card;
