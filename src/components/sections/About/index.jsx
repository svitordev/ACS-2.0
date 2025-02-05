function About({ title, children }) {
  return (
    <section
      id="about"
      className="container px-3 xl:px-32 2xl:px-36 mx-auto flex flex-col gap-4  mb-5 md:my-5"
    >
      {title}
      <div className="columns-3xs 2xl:columns-lg md:columns-xs gap-6 text-justify">
        {children}
      </div>
    </section>
  );
}

export default About;
