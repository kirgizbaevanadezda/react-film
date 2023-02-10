import React from "react";
import { Link } from "react-router-dom";

function MovieItem({
  release_date,
  name,
  original_title,
  original_name,
  first_air_date,
  title,
  backdrop_path,
  poster_path,
  id,
}) {
  return (
    <Link to={`/movie/${id}/`}>
      <li className="item">
        <img
          className="movieimg"
          src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
          alt=""
        />
        <h2 className="subtitle">
          {title || original_title || name || original_name}
        </h2>
      </li>
    </Link>
  );
}

export default MovieItem;
