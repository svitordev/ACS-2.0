function About({ title, children }) {
  return (
    <section
      id="about"
      className="w-[90%] lg:w-[85%] xl:w-9/12 2xl:w-[70%] mx-auto flex flex-col gap-4  mb-5 md:my-5"
    >
      {title}
      <div className="columns-3xs xl:columns-sm 2xl:columns-lg md:columns-xs gap-6">
        {children}
      </div>
    </section>
  );
}

export default About;
