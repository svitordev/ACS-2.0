import BouncingButton from "./BouncingButton";

function Home() {
  return (
    <section
      className="flex h-72 md:h-[24rem] lg:h-[90dvh] w-full relative overflow-hidden mb-5 justify-center items-end"
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
        <source
          src="https://www.acs.art.br/acs%2Festrutura%2Facs.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="absolute text-white text-center  bottom-5 md:bottom-8 lg:bottom-6 flex flex-col items-center gap-1 uppercase">
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black ">
          Associação Cultural <br /> Surubinense
        </h1>
        <p className="text-xs md:text-sm 2xl:text-2xl">11 de agosto de 2023</p>
        <BouncingButton />
      </div>
    </section>
  );
}

export default Home;
