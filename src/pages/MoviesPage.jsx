import React, { useEffect, useState } from "react";

import Sorchbar from "../components/sorchbar/Sorchbar";
import Movie from "../components/movie/MovieList";
import Loader from "../components/Loader/Loader";
import axios from "axios";

const MoviesPage = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  //
  //
  useEffect(() => {
    const Api = `https://api.themoviedb.org/3/search/movie?api_key=cd0424926ff3c009921c9fa2e813a15c&page=${page}&query=${query}&include_adult=false`;
    const Fichdata = async () => {
      try {
        await axios.get(Api).then((resp) => {
          const data = resp.data.results;

          setMovie(() => {
            return [...movie, ...data];
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    Fichdata();
  }, [page, query]);

  const hendlLoad = () => {
    setPage((prevState) => prevState + 1);
  };
  const hendlSobmit = (data) => {
    setQuery(data);
  };
  return (
    <>
      <div className="container">
        <Sorchbar onSubmit={hendlSobmit} />
        <Movie movie={movie} />
        {movie.length > 0 && <Loader onClick={hendlLoad} />}
      </div>
    </>
  );
};

export default MoviesPage;
