function Paragraph({ children, style }) {
  return (
    <p
      className={`w-full text-wrap  absolute font-extrabold text-white text-2xl ${style}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
