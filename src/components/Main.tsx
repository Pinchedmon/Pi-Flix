import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
interface Movie {
  title: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
}
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie: Movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[25%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Смотреть
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Смотреть позже
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Дата выхода: {movie?.release_date}
          </p>
          <p className="w-full md:mx-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
