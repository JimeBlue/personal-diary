const EntryCard = ({ entry, index }) => {
    const date = new Date(entry.date);

    // Alternate card colors by list position: even index → pink, odd → white.
    const cardColor = index % 2 === 0 ? "bg-pink" : "bg-white";

    // "2026-06-12" → "12", "Fri" and "Jun 2026", shown as separate pieces.
    const dayNumber = String(date.getDate()).padStart(2, "0");
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const monthYear = date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    return (
        <article className={`card ${cardColor} shadow-md hover:shadow-xl transition-shadow duration-200 cursor-pointer`}>
            <div className="card-body gap-4">
                <div className="flex items-center gap-3">
                    <span className="font-pliant text-3xl font-bold text-navy">{dayNumber}</span>
                    <span className="font-nunito text-sm text-navy">
                        {weekday} - <span className="font-bold">{monthYear}</span>
                    </span>
                </div>

                <div className="flex gap-4">
                    <figure className="w-24 h-24 shrink-0 overflow-hidden rounded-xl">
                        <img
                            src={entry.imageUrl}
                            alt={entry.title}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div>
                        <h3 className="card-title font-pliant text-navy line-clamp-2">{entry.title}</h3>
                        <p className="font-nunito text-sm text-navy/80 line-clamp-3">
                            {entry.content}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default EntryCard;
