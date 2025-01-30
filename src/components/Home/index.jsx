import BouncingButton from "./BouncingButton";

function Home({ srcVideo, section, classHome, children }) {
  return (
    <section
      className={`${classHome} flex h-72 md:h-[24rem] lg:h-[90dvh] w-full relative overflow-hidden mb-5 justify-center items-end`}
      id="home"
    >
      <video
        className="w-full h-full object-cover brightness-75"
        autoPlay
        loop
        muted
        width="100%"
        height="100%"
      >
        <source src={srcVideo} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="absolute text-white text-center  bottom-5 md:bottom-8 lg:bottom-6 flex flex-col items-center gap-1 uppercase">
        {children}
        <BouncingButton section={section} />
      </div>
    </section>
  );
}

export default Home;
