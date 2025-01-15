import Link from "next/link";
import { FaLink } from "react-icons/fa6";

function LinkProject({href}) {
  return (
    <Link
    rel="next"
      href={href}
      className="flex gap-2 no-underline capitalize font-medium text-base py-2 px-5 rounded-xl border-2 border-white transition-all duration-500 hover:scale-105 items-center"
    >
      <FaLink/> saiba mais
    </Link>
  );
}

export default LinkProject;
