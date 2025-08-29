import React from "react";

export const News = ({ title, srcImg, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener"
      className="block h-full w-full bg-center bg-cover shadow-md transition-transform"
      style={{
        backgroundImage: `url(${srcImg})`,
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-end pb-[5%] md:pb-[4%] xl:pb-[3%]">
        <span className="text-white p-4 md:text-lg lg:text-xl 2xl:text-2xl font-semibold text-center uppercase w-4/5 lg:w-3/5">
          {title}
        </span>
      </div>
    </a>
  );
};
