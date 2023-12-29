import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

function Main() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="relative h-[85vh] w-screen text-white overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }`}
        alt={movie?.title}
      />
      <div className="absolute w-full top-[20%] md:top-[15%] ml-7 p-5 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold ml-5 mt-10">
          {truncate(movie?.title, 150)}
        </h1>
        <p className="ml-5 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-10">
          {movie?.overview}
        </p>
        <div className="flex items-center ml-5 my-4 z-30">
          <button className="bg-gray-100 hover:bg-slate-300 rounded flex items-center cursor-pointer py-2 px-10 text-black">
            <FaPlay className="text-black mr-2"  /> Play
          </button>
          <button className="rounded flex items-center py-2 px-8 cursor-pointer text-white ml-4 bg-[gray]/70">
            Watch Later <MdOutlineWatchLater className=" ml-2" />
          </button>
        </div>
        <p className="ml-5 text-gray-400">Released: {movie?.release_date}</p>
      </div>
    </div>
  );
}

export default Main;
