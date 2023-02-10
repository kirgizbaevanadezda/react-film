import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/movie/MovieList";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  //
  //

  useEffect(() => {
    const Api = `https://api.themoviedb.org/3/trending/all/day?api_key=cd0424926ff3c009921c9fa2e813a15c&page=${page}`;
    const fetchData = async () => {
      try {
        axios.get(Api).then((resp) => {
          const data = resp.data;

          setMovie(() => {
            return [...movie, ...data.results];
          });
        });
      } catch (error) {}
    };
    fetchData();
  }, [page]);

  const hendlLoad = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="wrapper">
        <Movie movie={movie} />
        <Loader onClick={hendlLoad} />
      </div>
    </>
  );
};

export default HomePage;
