import { useDiary } from "../context/DiaryContext";
import { formatDate } from "../utils/formatDate";

const EntryCard = ({ entry, index }) => {
    // Alternate card colors by list position: even index → pink, odd → white.
    const cardColor = index % 2 === 0 ? "bg-pink" : "bg-white";

    const { dayNumber, weekday, monthYear } = formatDate(entry.date);

    const { openViewModal } = useDiary();
    return (
        <article onClick={() => openViewModal(entry)} className={`card ${cardColor} shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition duration-200 cursor-pointer`}>
            <div className="card-body gap-4">
                <div className="badge badge-lg bg-yellow border-yellow text-navy gap-2 py-4 rounded-xl">
                    <span className="font-pliant text-xl font-bold">{dayNumber}</span>
                    <span className="font-nunito text-sm">
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
                        <p className="font-nunito text-sm text-black line-clamp-3">
                            {entry.content}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default EntryCard;
