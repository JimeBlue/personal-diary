import { useDiary } from "../context/DiaryContext";
import EntryCard from "./EntryCard";

const EntryList = () => {
    const { entries } = useDiary();

    // Sorted newest-first. Spread first because sort mutates: I sort a copy, never the context array.
    const sortedEntries = [...entries].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <section className="bg-navy">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="font-pliant text-white text-2xl sm:text-4xl font-medium mb-8">
                    My Entries
                </h2>

                {sortedEntries.length === 0 ? (
                    <p className="font-nunito text-pink/70">
                        No entries yet — write your first one!
                    </p>
                ) : (
                    <ul className="grid grid-cols-1 gap-8">
                        {sortedEntries.map((entry, index) => (
                            <li key={entry.id}>
                                <EntryCard entry={entry} index={index} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default EntryList;
