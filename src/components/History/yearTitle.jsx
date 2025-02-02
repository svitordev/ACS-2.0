function YearTitle({ children }) {
  return (
    <h2
      className={`text-red-800 text-center md:text-start text-xl 2xl:text-2xl font-extrabold uppercase`}
    >
      {children}
    </h2>
  );
}

export default YearTitle;
