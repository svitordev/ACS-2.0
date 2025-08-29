function About({ title, children }) {
  return (
    <section
      id="about"
      className="container px-3 xl:px-32 2xl:px-32 mx-auto space-y-4 my-16"
    >
      {title}
      <div className="columns-3xs 2xl:columns-lg md:columns-xs gap-6 ">
        {children}
      </div>
    </section>
  );
}

export default About;
