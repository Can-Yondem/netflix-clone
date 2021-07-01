import React, { useEffect, useState, useRef } from "react";
import Card from "../card/Card";
import "../movie-card-row/movierow.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import axios from "axios";

const MovieCardRow = ({ fetchURL, title }) => {
  const [movies, setMovies] = useState([]);
  const [activeSlider, setActiveSlider] = useState(false);
  const scroller = useRef();



  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [fetchURL]);


  const nextSlide = () => {
    const { scrollWidth, scrollLeft, clientWidth } = scroller.current;
    setActiveSlider(true);
    if (scrollLeft <= 10) {
      scroller.current.scrollLeft = scrollLeft + 1195;
    }
    else if (scrollLeft < scrollWidth - clientWidth) {
      scroller.current.scrollLeft = scrollLeft + 1250;
    }
    else {
      setActiveSlider(false)
      scroller.current.scrollLeft = 0;
    }
  }

  const prevSlide = () => {
    const { scrollWidth, scrollLeft, clientWidth } = scroller.current;
    setActiveSlider(true);
    if (scrollLeft <= 1195) {
      scroller.current.scrollLeft = scrollLeft - 1195;
      setActiveSlider(false)
    }
    else if (scrollLeft < scrollWidth - clientWidth) {
      scroller.current.scrollLeft = scrollLeft - 1250;
    }
    else {
      setActiveSlider(false)
      scroller.current.scrollLeft = 0;
    }
  }

  return (
    <div className="movies-row">
      <div className="title">
        <span>{title}</span>
      </div>
      <div >
        <div className="slider-container">
          <BsChevronLeft className={activeSlider ? "left-arrow showLeftButton" : "left-arrow"} onClick={prevSlide} />
          <BsChevronRight className="right-arrow" onClick={nextSlide} />
          <div className={activeSlider ? "slider active" : "slider"} ref={scroller} >
            {movies.map((item, index) =>
              item.backdrop_path ? <Card key={index} image={item.backdrop_path} /> : null
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieCardRow;
