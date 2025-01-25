import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function ButtonsEditDel({ onEditClick, onDelClick }) {
  return (
    <div className="flex absolute gap-1 left-2 top-2">
      <button className="border-none text-center p-2 rounded-full text-white font-black cursor-pointer bg-blue-600 hover:bg-blue-700" onClick={onEditClick}>
        <MdEdit />
      </button>

      <button className="border-none text-center p-2 rounded-full text-white font-black cursor-pointer bg-red-600 hover:bg-red-700" onClick={onDelClick}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default ButtonsEditDel;
