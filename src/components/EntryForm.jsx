import { useState } from "react";
import { useDiary } from "../context/DiaryContext";

// Today as a "YYYY-MM-DD" string in the user's local timezone.
// (en-CA locale formats dates as YYYY-MM-DD, matching what input type="date" uses.)
const today = new Date().toLocaleDateString("en-CA");

const initialFormData = { title: "", date: today, imageUrl: "", content: "" };

// Small helper component for showing a validation error under a field.
// Takes the message for one field (e.g. errors.title) as a prop.
// If there's no message (undefined), it returns null — that's how a React
// component renders "nothing", so the call site doesn't need a && guard.
// fieldset-label is DaisyUI's helper-text style; text-error makes it red.
const FieldError = ({ message }) => {
    if (!message) return null;
    return <p className="fieldset-label text-error">{message}</p>;
};

const EntryForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const { closeAddModal, addEntry, entries } = useDiary();
    const [errors, setErrors] = useState({});

    // Derived during render — no extra state needed. Recomputed automatically
    // on every keystroke, which is what makes the warning "live".
    const hasEntryToday = entries.some((entry) => entry.date === today);

    // One warning drives both the alert banner and the submit gate,
    // so the UI and the logic can never disagree.
    const dateWarning = hasEntryToday
        ? "You already wrote an entry for today — come back tomorrow!"
        : formData.date && formData.date !== today
            ? "Entries can only be added for today."
            : null;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const validate = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = "Title is required.";
        if (!formData.date) newErrors.date = "Date is required.";
        if (!formData.imageUrl.trim()) newErrors.imageUrl = "ImageUrl is required.";
        if (!formData.content.trim()) newErrors.content = "Content is required.";
        return newErrors;
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        };

        // Same value that drives the alert banner — if a warning is showing,
        // the submit is blocked too.
        if (dateWarning) return;

        setErrors({});
        // pass the entry to the context and append it to entries
        addEntry(formData);
        // resets fields
        setFormData(initialFormData);
        closeAddModal()
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
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
                    <FieldError message={errors.title} />
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
                    <FieldError message={errors.date} />
                </fieldset>

                {dateWarning && (
                    <div role="alert" className="alert alert-warning">
                        <span>{dateWarning}</span>
                    </div>
                )}
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
                    <FieldError message={errors.imageUrl} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Content</legend>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="textarea w-full h-32"
                        placeholder="Write about your day..."
                    />
                    <FieldError message={errors.content} />
                </fieldset>

                <div className="modal-action">
                    <button type="button" className="btn" onClick={closeAddModal}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>


        </section>
    )
}
export default EntryForm