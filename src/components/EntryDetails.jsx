import { useDiary } from "../context/DiaryContext";
import { formatDate } from "../utils/formatDate";

const EntryDetails = () => {
    const { selectedEntry } = useDiary();

    if (!selectedEntry) return null;

    const { dayNumber, weekday, monthYear } = formatDate(selectedEntry.date);

    return (
        <div className="flex flex-col gap-6">

            <div className="badge badge-lg bg-pink border-pink text-navy gap-2 py-4  rounded-xl">
                <span className="font-pliant text-xl font-bold">{dayNumber}</span>
                <span className="font-nunito text-sm">
                    {weekday} - <span className="font-bold">{monthYear}</span>
                </span>
            </div>


            <h2 className="font-pliant text-navy text-2xl">{selectedEntry.title}</h2>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <figure className="overflow-hidden rounded-xl">
                    <img
                        src={selectedEntry.imageUrl}
                        alt={selectedEntry.title}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <p className="font-nunito text-black whitespace-pre-line font-normal">
                    {selectedEntry.content}
                </p>
            </div>
        </div>
    );
};

export default EntryDetails;
