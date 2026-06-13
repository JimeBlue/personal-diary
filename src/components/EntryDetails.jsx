import { useDiary } from "../context/DiaryContext";

const EntryDetails = () => {
    const { selectedEntry } = useDiary();

    if (!selectedEntry) return null;

    const date = new Date(selectedEntry.date);

    // Same date pieces as EntryCard: "12", "Fri" and "Jun 2026".
    const dayNumber = String(date.getDate()).padStart(2, "0");
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const monthYear = date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    return (
        <div className="flex flex-col gap-6">
            {/* First row: date + title */}
            <div className="flex items-center gap-3">
                <span className="font-pliant text-3xl font-bold text-navy">{dayNumber}</span>
                <span className="font-nunito text-sm text-navy">
                    {weekday} - <span className="font-bold">{monthYear}</span>
                </span>
                <h2 className="font-pliant text-navy text-2xl line-clamp-2">{selectedEntry.title}</h2>
            </div>

            {/* Second row: 1 col by default, 2 cols from lg */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <figure className="overflow-hidden rounded-xl">
                    <img
                        src={selectedEntry.imageUrl}
                        alt={selectedEntry.title}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <p className="font-nunito text-navy/80 whitespace-pre-line">
                    {selectedEntry.content}
                </p>
            </div>
        </div>
    );
};

export default EntryDetails;
