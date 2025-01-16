import Link from "next/link";
import { FaLink } from "react-icons/fa6";

function LinkProject({href}) {
  return (
    <Link
    rel="next"
      href={href}
      className="flex gap-2 no-underline capitalize font-semibold text-base py-1 px-4 rounded-lg border-2 border-green-900 text-green-900 transition-all duration-200 hover:bg-green-900 hover:text-white items-center"
    >
      <FaLink/> saiba mais
    </Link>
  );
}

export default LinkProject;
