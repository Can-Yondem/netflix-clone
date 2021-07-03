import React from "react";
import MovieCardRow from "./movie-card-row/MovieCardRow";
import movieRequest from "./request"; //Film kategori linkleri.
import "./movierows.css";

const MovieCardRows = () => {
  return (
    <div className="movierow-container">
      {/*Her component bir kategori gösterir. Bu komponent iki prop alır.
        Birinicisi title. İkinicisi fetchURL.
        Title propuna ekranda gösterilecek film satırının kategorisinin ismi geçiir.
        fetchURL ise movieRequestteki API URL'lerinin geçildiği proptur.*/}
      <MovieCardRow fetchURL={movieRequest["Netflix Originals"]} title="Netflix Originals" />
      <MovieCardRow fetchURL={movieRequest.Action} title="Action" />
      <MovieCardRow fetchURL={movieRequest.Adventure} title="Adventure" />
      <MovieCardRow fetchURL={movieRequest.Comedy} title="Comedy" />
      <MovieCardRow fetchURL={movieRequest.Crime} title="Crime" />
      <MovieCardRow fetchURL={movieRequest.Documentary} title="Documentary" />
      <MovieCardRow fetchURL={movieRequest.Family} title="Family" />
      <MovieCardRow fetchURL={movieRequest.Fantasy} title="Fantasy" />
      <MovieCardRow fetchURL={movieRequest.Horror} title="Horror" />
      <MovieCardRow fetchURL={movieRequest["Top Rated"]} title="Top Rated" />
      <MovieCardRow fetchURL={movieRequest.Trending} title="Trending" />
      <MovieCardRow fetchURL={movieRequest.War} title="War" />
      <MovieCardRow fetchURL={movieRequest.Western} title="Western" />
    </div>
  );
};

export default MovieCardRows;
