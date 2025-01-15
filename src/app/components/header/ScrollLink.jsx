import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function ScrollLink({ href, children }) {
  const [offset, setOffset] = useState(null);
  const screenWidth = window.innerWidth;
  useEffect(() => {
    const updateOffset = () => {
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
  }, [screenWidth]);
  return (
    <Link
      to={href}
      smooth={true}
      duration={100}
      offset={offset}
      className="hover:text-green-900 p-3 cursor-pointer md:text-lg 2xl:text-xl"
    >
      {children}
    </Link>
  );
}

export default ScrollLink;
