"use client";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function ScrollLink({ href, children }) {
  const [offset, setOffset] = useState(-80);
  useEffect(() => {
    const updateOffset = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1535) {
        setOffset(-130);
      } else if (screenWidth >= 768) {
        setOffset(-90);
      } else {
        setOffset(-80);
      }
    };

    updateOffset(); 
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);
  return (
    <Link
      to={href}
      smooth={true}
      duration={100}
      offset={offset}
      className="p-3 cursor-pointer"
    >
      {children}
    </Link>
  );
}

export default ScrollLink;
