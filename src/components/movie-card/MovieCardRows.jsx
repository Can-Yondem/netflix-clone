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
      <MovieCardRow fetchURL={movieRequest["Netflix Originals"]} title="Netflix Yapımı" />
      <MovieCardRow fetchURL={movieRequest.Trending} title="Trend" />
      <MovieCardRow fetchURL={movieRequest["Top Rated"]} title="En Çok Oy Alan" />
      <MovieCardRow fetchURL={movieRequest.Action} title="Aksiyon" />
      <MovieCardRow fetchURL={movieRequest.Adventure} title="Macera" />
      <MovieCardRow fetchURL={movieRequest.Comedy} title="Komedi" />
      <MovieCardRow fetchURL={movieRequest.Crime} title="Suç" />
      <MovieCardRow fetchURL={movieRequest.Documentary} title="Belgesel" />
      <MovieCardRow fetchURL={movieRequest.Family} title="Aile" />
      <MovieCardRow fetchURL={movieRequest.Horror} title="Korku" />
      <MovieCardRow fetchURL={movieRequest.War} title="Savaş" />
    </div>
  );
};

export default MovieCardRows;
