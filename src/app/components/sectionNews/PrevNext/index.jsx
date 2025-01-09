function PrevNext({ children, onClick, styles }) {
  return <div className={`cursor-pointer absolute top-[45%] w-auto p-2 text-white font-bold text-lg r select-none hover:bg-white/80 ${styles}`} style={{
   transition: "0.6s ease",
  }} onClick={onClick}>{children}</div>;
}

export default PrevNext;