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
  console.log(movie);
  const truncate=(str,num)=>{
    if(str?.length>num){
        return str.slice(0,num)+'...';
    }else{
        return str
    }
  }

  return (
    
      <div className="absolute top-0 left-0  h-[77vh] -z-20 w-screen text-white">
        <div className="absolute w-full h-[100%] bg-gradient-to-t from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] md:top-[15%] p-5 md:pd-8 ">
        <h1 className="text-3xl md:text-5xl font-bold ml-5 mt-10 ">{truncate(movie?.title, 150)}</h1>
        <p className="ml-5 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-10">{movie?.overview}</p>
          <div className="flex items-center ml-5 my-4 z-30">
            <button className="bg-gray-300 rounded flex items-center cursor-pointer  py-2 px-10 text-black">
            <FaPlay className=" text-black " /> Play 
            </button>
            <button className=" rounded flex items-center py-2 px-8 cursor-pointer text-white ml-4 bg-[gray]/70">
              Watch Later <MdOutlineWatchLater />
            </button>
          </div>
          <p className="ml-5 text-gray-400">Released: {movie?.release_date}</p>
        </div>
      </div>
    
  );
}

export default Main;
