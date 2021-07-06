import React, { useEffect, useState, useRef } from "react";
import Card from "../card/Card";
import "../movie-card-row/movierow.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import axios from "axios";

const MovieCardRow = ({ fetchURL, title }) => {
  const [movies, setMovies] = useState([]); //Prop olarak gelen URL için API'den gelen filmleri tutan state.
  const [activeSlider, setActiveSlider] = useState(false); // Slider için ayarı tutan state.
  const scroller = useRef(); //Slider scroll pozisyonunu okuyabilmek için slider referasını tutan state.

  useEffect(() => {
    /* fetchURL propundan gelen URL'yi API'den ister.*/
    const fetchMovies = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [fetchURL]);
  console.log(movies);
  /*Sliderın sağ tuşu için scroll hareketi*/
  const nextSlide = () => {
    const { scrollWidth, scrollLeft, clientWidth } = scroller.current;
    setActiveSlider(true);
    if (scrollLeft < 1) {
      scroller.current.scrollLeft = scrollLeft + clientWidth * (1 - 8.5 / 100);
    }
    else if (scrollLeft < scrollWidth - clientWidth) {
      scroller.current.scrollLeft = scrollLeft + clientWidth * (1 - 8 / 100);
    }
    else {
      setActiveSlider(false)
      scroller.current.scrollLeft = 0;
    }
  }

  /*Sliderın sol tuşu için scroll hareketi*/
  const prevSlide = () => {
    const { scrollLeft, clientWidth } = scroller.current;
    if (scrollLeft <= clientWidth * (1 - 12.5 / 100)) {
      setActiveSlider(false)
      scroller.current.scrollLeft = scrollLeft - clientWidth * (1 - 12.5 / 100);
    }
    else {
      scroller.current.scrollLeft = scrollLeft - clientWidth * (1 - 9 / 100);
    }
  }
  return (
    <div className="movies-row">
      {/*Film kategorisini ekrana bastırır.*/}
      <div className="title">
        <span>{title}</span>
      </div>
      <div>
        {/*Netflix slider*/}
        <div className="slider-container">
          <BsChevronLeft className={activeSlider ? "left-arrow showLeftButton" : "left-arrow"} onClick={prevSlide} />
          <BsChevronRight className="right-arrow" onClick={nextSlide} />
          <div className={activeSlider ? "slider active" : "slider"} ref={scroller} >
            {movies.map((item, index) =>
              item.backdrop_path ? <Card 
              key={index} 
              image={item.backdrop_path} 
              overview={item.overview}
              title={item.name || item.original_title}
              date={item.release_date || item.first_air_date}
              vote={item.vote_average}
              genre={title}
              /> : null
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieCardRow;
