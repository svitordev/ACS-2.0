function ProjectsSection({ title, children }) {
  return (
    <section
      id="projects"
      className="w-[90%] lg:w-[85%] xl:w-9/12 2xl:w-[70%] mx-auto my-10 gap-4 flex flex-col"
    >
      {title}
      <div className="grid justify-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 uppercase font-extrabold text-xl text-center">
        {children}
      </div>
    </section>
  );
}

export default ProjectsSection;
