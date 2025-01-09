import { IoMdClose } from "react-icons/io";
import ReactModal from "react-modal";

function Modal({ isOpen, onRequestClose, title, form }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="bg-blue-950 p-2 rounded-lg w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/3 mx-auto"
      overlayClassName="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center"
    >
      <div className="relative w-full p-8  border-2 border-solid border-white rounded-lg flex-col justify-center gap-2 text-white">
        <IoMdClose
          onClick={onRequestClose}
          className="m-4 cursor-pointer absolute right-0 top-0 size-6"
        />
          <h2 className="font-bold text-lg text-center uppercase">{title}</h2>
        {form}
      </div>
    </ReactModal>
  );
}

export default Modal;
