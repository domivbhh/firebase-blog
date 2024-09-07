import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../data';

const DemoHeader = () => {
  const[active,setActive]=useState(false)
  useEffect(()=>{
      const scrollMe=()=>{
        window.scrollY>50 ?setActive(true):setActive(false)
      };
      window.addEventListener('scroll',scrollMe)
  },[])



  return (
    <header className={`border-b border-black sticky top-0 z-50 opacity-100 ${active ? 'bg-sky-400 text-white':"bg-white"} transition-all duration-500`}>
      <div className="size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <img
            src="https://logodix.com/logo/1597048.png"
            alt=""
            className="h-[2.5rem]"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm sm:flex items-center gap-5">
            {nav.map((ele, ind) => {
              return (
                <Link to={ele.path} key={ind}>
                  {ele.title}
                </Link>
              );
            })}
          </div>
          <div className="relative">
            <button className="hidden text-sm sm:flex items-center gap-5">
              Sign-in
            </button>
          </div>
          <button className="bg-sky-500 text-white rounded-full px-3 p-2 text-sm font-medium">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}

export default DemoHeader
