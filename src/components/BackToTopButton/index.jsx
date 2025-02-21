"use client"
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export const BackToTopButton = ({color}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.8) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      isVisible && ( 
        <div className={`fixed w-12 h-12 bottom-4 text- right-4 ${color} rounded-full flex justify-center items-center`}>
          <Link
            to="home" 
            smooth={true}
            offset={-120} 
            duration={500}
            className="w-[88%] h-[88%]"
          >
            <button
              className={`w-full h-full rounded-full  bg-white focus:outline-none`}
            >
              <span className="text-2xl font-extrabold">↑</span>
            </button>
          </Link>
        </div>
      )
    );
  };