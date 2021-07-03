import React, { useEffect, useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./herosection.css";
import axios from "axios";
import movieRequest from "../movie-card/request"; //Film kategori linkleri.

const URL = "https://www.themoviedb.org/t/p/original";

const HeroSection = () => {
  const [movies, setMovies] = useState([]); //Banner'da ve banner'ın kartında gösterilcek filmleri tutan state.


  useEffect(() => {
    /* Axios kütüphanesi ile API'den filmlerimi çektik. */
    const fetchMovies = async () => {
      const request = await axios.get(movieRequest["Netflix Originals"]);

      /*Gelen film dizisinin uzunluğu maksimum sayı olacak şekilde sayı üretilir 
      ve sayfa her yenilendiğinde rastgele bir film ekranda görünür. */
      const rndNumber = Math.floor(Math.random() * request.data.results.length);
      setMovies(
        request.data.results[rndNumber]
      );
      return request;
    };
    fetchMovies();
  }, []);

  return (
    <div className="hero-img-container">
      {/* Banner*/}
      <img src={`${URL}${movies.backdrop_path}`} alt="" />

      {/*Banner'a görüntülenen film kartı*/}
      <div className="hero-card-container">
        <div className="card-title">
          <h1>{movies.name}</h1>
        </div>

        <div className="card-description">
          <p>
            {movies.overview}
          </p>
        </div>
        
        {/*Kart butonları*/}
        <div className="card-buttons">
          <button className="btn-play">
            <div className="btn-icon">
              <GrPlayFill />
            </div>
            <div>Oynat</div>
          </button>
          
          <button className="btn-information">
            <div className="btn-icon">
              <IoMdInformationCircleOutline />
            </div>
            <div>Daha Fazla Bilgi</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
