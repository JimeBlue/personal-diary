import { useState } from "react";
import { useDiary } from "../context/DiaryContext";

const initialFormData = { title: "", date: "", imageUrl: "", content: "" };

const EntryForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const { closeAddModal } = useDiary();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <section>
            <form>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Title</legend>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="My day at the beach"
                    />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Date</legend>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="dd.mm.YYYY"
                    />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Image</legend>
                    <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="your image url"
                    />
                </fieldset>
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="textarea w-full h-32"
                    placeholder="Write about your day..."
                />

                <div className="modal-action">
                    <button type="button" className="btn" onClick={closeAddModal}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>


        </section>
    )
}
export default EntryForm