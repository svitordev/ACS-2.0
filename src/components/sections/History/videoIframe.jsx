import dynamic from "next/dynamic";

const VideoIframe = ({ src }) => {
  return (
    <div className="w-[95%] h-52 md:w-3/5 md:h-64 lg:h-80 xl:h-96 mx-auto rounded-lg shadow-lg shadow-gray-600">
      <iframe
        className="w-full h-full rounded-lg"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default dynamic(() => Promise.resolve(VideoIframe), { ssr: false });
