import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "../movie-card-row/movierow.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import axios from "axios";


const URL = "https://www.themoviedb.org/t/p/original";

const MovieCardRow = ({ fetchURL, title }) => {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = movies.length

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [fetchURL]);


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(movies) || movies.length <= 0) {
    return null;
  }

  /*
             <div key={index} className={index === current ? "slide_active" : "slide"}>
              {index === current && (<Card key={index} image={item.backdrop_path} />)}
            </div>
  */

  return (

    <div className="movies-row">
      <div className="title">
        <span>{title}</span>
      </div>

      <div className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {movies.map((item, index) => {
          return (
            <div key={index} className={index === current ? "slide_active" : "slide"}>
              {<Card key={index} image={item.backdrop_path} />}
            </div>
          )
        }
        )}
      </div>
    </div>

  );
};

export default MovieCardRow;
