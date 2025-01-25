function TitleSections({ children, color }) {
  return (
    <h1 className={`${color} text-center md:text-start text-3xl 2xl:text-4xl font-extrabold uppercase`}>
      {children}
    </h1>
  );
}

export default TitleSections;
