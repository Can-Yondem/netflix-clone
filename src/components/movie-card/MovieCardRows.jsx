import React from "react";
import MovieCardRow from "./movie-card-row/MovieCardRow";
import movieRequest from "./request";

const MovieCardRows = () => {
  return (
    <>
      <MovieCardRow fetchURL={movieRequest["Netflix Originals"]} title="Netflix Originals"/>
      <MovieCardRow fetchURL={movieRequest.Action} title="Action"/>
      <MovieCardRow fetchURL={movieRequest.Adventure} title="Adventure"/>
      <MovieCardRow fetchURL={movieRequest.Comedy} title="Comedy"/>
      <MovieCardRow fetchURL={movieRequest.Crime} title="Crime"/>
      <MovieCardRow fetchURL={movieRequest.Documentary} title="Documentary"/>
      <MovieCardRow fetchURL={movieRequest.Family} title="Family"/>
      <MovieCardRow fetchURL={movieRequest.Fantasy} title="Fantasy"/>
      <MovieCardRow fetchURL={movieRequest.Horror} title="Horror"/>
      <MovieCardRow fetchURL={movieRequest["Top Rated"]} title="Top Rated"/>
      <MovieCardRow fetchURL={movieRequest.Trending} title="Trending"/>
      <MovieCardRow fetchURL={movieRequest.War} title="War"/>
      <MovieCardRow fetchURL={movieRequest.Western} title="Western"/>
    </>
  );
};

export default MovieCardRows;
