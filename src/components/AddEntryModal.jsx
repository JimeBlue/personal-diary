import { FaTimes } from "react-icons/fa";
import { useDiary } from "../context/DiaryContext";

const AddEntryModal = () => {

    const { isAddOpen, closeAddModal } = useDiary();
    return (
        <div className={`modal ${isAddOpen ? "modal-open" : ""}`} role="dialog">
            <div className="modal-box">
                <button
                    onClick={closeAddModal}
                    className="btn btn-ghost group absolute right-2 top-2 hover:bg-transparent hover:border-transparent hover:shadow-none"
                    aria-label="Close"
                >
                    <FaTimes className="text-xl transition-transform duration-200 group-hover:scale-125 group-hover:-skew-x-6" />
                </button>
                EntryForm goes here
            </div>
            <div className="modal-backdrop" onClick={closeAddModal}></div>
        </div>
    )
}
export default AddEntryModal