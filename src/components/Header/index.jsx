"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-scroll";
import ScrollLink from "./ScrollLink";

function Header({ links, linkACS, ClassHeader, children }) {
  const [menuMobile, setMenuMobile] = useState(false);
  const menuIsOpen = () => setMenuMobile(true);
  const menuIsClose = () => setMenuMobile(false);
  return (
    <header
      className={`font-extrabold sticky top-0 z-40 bg-white 2xl:h-28 ${ClassHeader}`}
    >
      <div className="w-full h-full flex items-center justify-between px-4 md:px-10 lg:px-24 xl:px-32 2xl:px-44 relative">
        <Link
          to={"home"}
          smooth={true}
          duration={0}
          offset={-120}
          className="cursor-pointer"
        >
          {children} 
        </Link>
        {!menuMobile ? (
          <div onClick={menuIsOpen} className="md:hidden  cursor-pointer p-2">
            <TiThMenu size={"32"} />
          </div>
        ) : (
          <div onClick={menuIsClose} className="md:hidden  cursor-pointer ">
            <IoClose size={"45"} />
          </div>
        )}

        {menuMobile && (
          <nav className="md:hidden flex flex-col absolute right-2 top-[4.55rem] py-4 px-8 bg-white  rounded-xl z-50 md:text-lg 2xl:text-xl text-center">
            {linkACS}
            {Object.entries(links).map(([href, text]) => (
              <ScrollLink key={href} href={href}>
                {text}
              </ScrollLink>
            ))}
          </nav>
        )}
        <nav className="hidden md:flex gap-5 md:text-lg 2xl:text-xl">
          {linkACS}
          {Object.entries(links).map(([href, text]) => (
            <ScrollLink key={href} href={href}>
              {text}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
