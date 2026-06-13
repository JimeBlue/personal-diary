import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useDiary } from "../context/DiaryContext";

// Today as a "YYYY-MM-DD" string in the user's local timezone.
// (en-CA locale formats dates as YYYY-MM-DD, matching what input type="date" uses.)
const today = new Date().toLocaleDateString("en-CA");

const initialFormData = { title: "", date: today, imageUrl: "", content: "" };

// True if the string parses as a real URL. I use the built-in URL constructor
// instead of a regex: it throws on anything malformed, so a try/catch tells us
// whether the value is valid. 
const isValidUrl = (value) => {
    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
};

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

    // Only fires for past/future dates. The "already wrote today" case is
    // handled separately (we hide the form entirely), so it never competes
    // with this warning.
    const dateWarning = formData.date && formData.date !== today
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
        if (!formData.imageUrl.trim()) {
            newErrors.imageUrl = "Image URL is required.";
        } else if (!isValidUrl(formData.imageUrl)) {
            newErrors.imageUrl = "Please enter a valid URL.";
        }
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

    // If today's entry already exists there's nothing to fill in, so we replace
    // the whole form with a message + a way out. This stops the user from
    // completing fields that could never be submitted.
    if (hasEntryToday) {
        return (
            <section>
                <div role="alert" className="alert alert-warning">
                    <span>You already wrote an entry for today — come back tomorrow!</span>
                </div>
                <div className="modal-action">
                    <button type="button" className="btn" onClick={closeAddModal}>Close</button>
                </div>
            </section>
        );
    }

    return (
        <section>
            <h2 className="text-2xl font-bold text-navy mt-10">How was your day?</h2>
            <p className="text-xs text-gray-500 mb-4 font-light">All fields are required.</p>
            <form onSubmit={handleSubmit} noValidate>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-navy">Title*</legend>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="input w-full border-navy/50 focus:outline-navy"
                        placeholder="E.g. My day at the beach"
                    />
                    <FieldError message={errors.title} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-navy">Date*</legend>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="input w-full border-navy/50 focus:outline-navy"
                        placeholder="dd.mm.YYYY"
                    />
                    <FieldError message={errors.date} />
                </fieldset>

                {dateWarning && (
                    <div role="alert" className="alert bg-yellow text-black mt-3">
                        <FaExclamationTriangle />
                        <span>{dateWarning}</span>
                    </div>
                )}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-navy">Image URL*</legend>
                    <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="input w-full border-navy/50 focus:outline-navy"
                        placeholder="Your image url"
                    />
                    <FieldError message={errors.imageUrl} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-navy">Content*</legend>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="textarea w-full h-32 border-navy/50 focus:outline-navy"
                        placeholder="Write about your day..."
                    />
                    <FieldError message={errors.content} />
                </fieldset>

                <div className="modal-action">
                    <button
                        type="button"
                        className="btn btn-outline w-32 text-navy border-navy hover:bg-yellow hover:text-navy hover:border-yellow"
                        onClick={closeAddModal}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn bg-navy w-32 text-white border-navy hover:bg-yellow hover:text-navy hover:border-yellow"
                    >
                        Submit
                    </button>
                </div>
            </form>


        </section>
    )
}
export default EntryForm