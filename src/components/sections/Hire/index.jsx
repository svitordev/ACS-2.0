function Hire({ children, title, srcVideo }) {
  return (
    <section
      id="hire"
      className="container px-3 xl:px-32 2xl:px-36 mx-auto space-y-4  mb-16"
    >
      {title}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 xl:gap-10">
        <div className="space-y-2">{children}</div>
        {srcVideo && (
          <video controls className="rounded-lg object-cover shadow-lg shadow-blue-950 w-11/12 md:w-2/5 lg:w-1/4 mx-auto">
            <source src={srcVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        )}
      </div>
    </section>
  );
}

export default Hire;
