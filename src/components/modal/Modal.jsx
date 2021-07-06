import React from 'react'
import "./modal.css";
import StarRatings from 'react-star-ratings';
import { BiDislike, BiLike, BiCheck, BiPlayCircle } from "react-icons/bi";
const URL = "https://www.themoviedb.org/t/p/original";

const Modal = ({ image, overview, title, date, vote, openModal, genre }) => {

    const style = {
        backgroundSize: "cover",
        backgroundImage: `url(${URL}${image})`,
        backgroundPosition: "center center"
    };

    return (
        <div className="modal-container">
            <div className="overlay">
                <div className="image" style={style}>
                    <button className="btn exit-btn" onClick={openModal}>X</button>
                    <div className="modal-control">
                        <div className="modal-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="react-btn">
                            <button className="btn"><BiPlayCircle /></button>
                            <button className="btn"><BiCheck /></button>
                            <button className="btn"><BiLike /></button>
                            <button className="btn"><BiDislike /></button>
                        </div>
                    </div>
                    <div className="fade-bottom">
                    </div>
                </div>
                <div className="modal-content">
                    <div className="movie-overview">
                        <p>{overview}</p>
                    </div>

                    <div className="movie-info">
                        <p><span>Yayınlanma Tarihi: </span>{date}</p>
                        <p><span>IMDB Puan: </span>
                            <StarRatings
                                rating={vote / 2}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="5px" />
                        </p>
                        <p><span>Kategori: </span>{genre}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
