import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movie }) {
  const movieItem = movie.map((item) => {
    return <MovieItem key={item.id} {...item} />;
  });

  return (
    <>
      <div className="">
        <ul className="list">{movieItem}</ul>
      </div>
    </>
  );
}

export default MovieList;
