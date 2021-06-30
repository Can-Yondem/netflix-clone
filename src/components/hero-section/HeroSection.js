import React, { useEffect, useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./herosection.css";
import axios from "axios";
import movieRequest from "../movie-card/request";

const URL = "https://www.themoviedb.org/t/p/original";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(movieRequest["Netflix Originals"]);
      const rndNumber = Math.floor(Math.random() * request.data.results.length);
      setMovies(
        request.data.results[rndNumber]
      );
      return request;
    };
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <div className="hero-img-container">
      <img src={`${URL}${movies.backdrop_path}`} alt="" />
      <div className="hero-card-container">
        <div className="card-title">
          <h1>{movies.name}</h1>
        </div>
        <div className="card-description">
          <p>
            {movies.overview}
          </p>
        </div>
        <div className="card-buttons">
          <button className="btn-play">
            {" "}
            <div className="btn-icon">
              <GrPlayFill />
            </div>{" "}
            <div>Oynat</div>
          </button>
          <button className="btn-information">
            {" "}
            <div className="btn-icon">
              <IoMdInformationCircleOutline />
            </div>{" "}
            <div>Daha Fazla Bilgi</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
