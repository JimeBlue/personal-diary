// Presentational card for one diary entry (FR013): preview image, date, title.
// Gets its entry as a prop from EntryList — it doesn't need the context itself.
const EntryCard = ({ entry }) => {
    // "2026-06-12" → "June 12, 2026" for display; the raw string stays in state.
    const displayDate = new Date(entry.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <article className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-200 cursor-pointer">
            <figure className="aspect-video">
                <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <p className="font-nunito text-sm text-gray-500">{displayDate}</p>
                <h3 className="card-title font-pliant text-navy">{entry.title}</h3>
            </div>
        </article>
    );
};

export default EntryCard;
