import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight  } from "react-icons/md";

function Row({ title, fetchURL, rowId }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((responce) => {
      setMovies(responce.data.results);
    });
  }, [fetchURL]);

  const slideLeft=()=>{
    var slider=document.getElementById('slider'+ rowId)
    slider.scrollLeft=slider.scrollLeft-500
  }
  const slideRight=()=>{
    var slider=document.getElementById('slider'+ rowId)
    slider.scrollLeft=slider.scrollLeft+500
  }
  return (
    <div className="relative  sm:bottom-[540px] md:bottom-[370px] lg:bottom-28">
      <h2 className=" text-white font-bold md:text-xl p-4  ">{title}</h2>
      <div className="relative flex items-center group">
      <MdChevronLeft  onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>

        <div id={"slider"+ rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Movie key={id} item={item}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40}  className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>

      </div>
    </div>
  );
}

export default Row;
