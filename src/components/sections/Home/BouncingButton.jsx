"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-scroll";
function BouncingButton({section}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.8,
      });
    }
  }, []);
  return (
    <Link
      to={section}
      smooth={true}
      duration={600}
      offset={-90}
      className="cursor-pointer hidden lg:block mt-5"
    >
      <div ref={buttonRef}>
        <IoIosArrowDropdownCircle className="size-11 2xl:size-16" />
      </div>
    </Link>
  );
}

export default BouncingButton;
