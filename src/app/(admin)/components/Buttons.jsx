function Buttons({ handleClick, onRequestClose, textSubmit, textCancel }) {
  return (
    <div className="w-full flex justify-center gap-2 mt-2">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white w-28 py-2 font-bold rounded-lg cursor-pointer"
        onClick={handleClick ? handleClick : null}
        type={!handleClick ? "submit" : null}
      >
        {textSubmit}
      </button>
      <button
        className="bg-red-600 hover:bg-red-700 text-white w-28 py-2 font-bold rounded-lg cursor-pointer"
        type="button"
        onClick={onRequestClose}
      >
        {textCancel}
      </button>
    </div>
  );
}

export default Buttons;
