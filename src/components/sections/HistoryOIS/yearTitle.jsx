function YearTitle({ children, color }) {
  return (
    <h2
      className={`${color} text-center md:text-start text-xl 2xl:text-2xl font-extrabold uppercase`}
    >
      {children}
    </h2>
  );
}

export default YearTitle;
