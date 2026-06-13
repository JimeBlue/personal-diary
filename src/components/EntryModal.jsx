import { FaTimes } from "react-icons/fa";
import { useDiary } from "../context/DiaryContext";
import EntryDetails from "./EntryDetails";


const EntryModal = () => {

    const { isViewOpen, closeViewModal } = useDiary();
    return (
        <div className={`modal ${isViewOpen ? "modal-open" : ""}`} role="dialog">
            <div className="modal-box">
                <button
                    onClick={closeViewModal}
                    className="btn btn-ghost group absolute right-2 top-2 hover:bg-transparent hover:border-transparent hover:shadow-none"
                    aria-label="Close"
                >
                    <FaTimes className="text-xl transition-transform duration-200 group-hover:scale-125 group-hover:-skew-x-6" />
                </button>
                <EntryDetails />
            </div>
            <div className="modal-backdrop" onClick={closeViewModal}></div>
        </div>
    )
}
export default EntryModal
