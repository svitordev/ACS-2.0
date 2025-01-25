function SpanInfoTime({ children, style }) {
  return (
    <span className={`absolute font-semibold  text-white right-4 top-3 2xl:top-5 2xl:right-6 2xl:text-xl  ${style}`}>
      {children}
    </span>
  );
}

export default SpanInfoTime;
