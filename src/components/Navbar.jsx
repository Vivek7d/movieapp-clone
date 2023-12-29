import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { FaBell } from "react-icons/fa6";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const{user,logOut}= UserAuth()
  const navigate= useNavigate()
  // console.log(user)
  const handleLogOut= async()=>{
    try{
      await logOut();
      navigate('/')

    }catch(error){
      console.log(error)
    }
  }
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className='flex  items-center space-x-2 md:space-x-10'>
      <Link  to='/'>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        width={100}
        height={100}
        className="cursor-pointer object-contain"
        alt=""
      />
      </Link>
      <ul className="hidden space-x-4 lg:flex">
        <li className="headerLink">Home</li>
        <li className="headerLink">TV Shows</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">New & Popular</li>
        <li className="headerLink">My List</li>
      </ul>
      </div>
     {user?.email? <div className="flex items-center space-x-4 text-sm font-light">
        <GrSearch  className="hidden h-6 w-6 sm:inline text-white"/>
        <FaBell className="hidden h-6 w-6 sm:inline cursor-pointer text-white"/>
        <Link to='/account'>
       <button className="text-wrap pr-4 text-white">Account</button>
        </Link>

        <button onClick={handleLogOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"> Logout</button>
     
        
      </div> :  <div className="flex items-center space-x-4 text-sm font-light">
        <GrSearch  className="hidden h-6 w-6 sm:inline text-white"/>
        <FaBell className="hidden h-6 w-6 sm:inline cursor-pointer text-white"/>
        <Link to='/login'>
       <button className="text-wrap pr-4 text-white">Sign In</button>
        </Link>
        <Link to='/signUp'>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"> Sign Up</button>
        </Link>
        
      </div>

     }

    </header>
  );
}

export default Navbar;
