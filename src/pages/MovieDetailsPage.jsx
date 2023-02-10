import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams, Route, Routes, Link } from "react-router-dom";
import Castlist from "../components/Cast/Castlist";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(
            ` 
    https://api.themoviedb.org/3/movie/${id}?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US`
          )
          .then((res) => {
            setFilm(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return (
    <>
      {film && (
        <div className="box">
          <div className="details_box">
            <img
              className="detalisimg "
              src={`https://image.tmdb.org/t/p/w500${
                film.backdrop_path || film.poster_path
              }`}
              alt=""
            />{" "}
            <ul className="detalislist">
              <li className="detailitem">
                <p className="trxt">
                  {film.title ||
                    film.original_title ||
                    film.name ||
                    film.original_name}
                </p>
                <p className="desc">{film.vote_average}</p>
                <p className="desc">{film.overview}</p>
                <p className="desc">{film.release_date}</p>
              </li>
            </ul>
            <ul className="detalislist">
              <li className="cast">
                <Link to={"cast"}>Cast</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Routes>
        <Route path="cast" element={<Castlist id={id} />} />
      </Routes>
    </>
  );
};

export default MovieDetailsPage;
