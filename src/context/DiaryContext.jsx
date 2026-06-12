import { createContext, useState, useContext, useEffect } from "react";

const DiaryContext = createContext();

// localStorage key defined once, so a typo can't silently split load and save
const storageKey = "entries";

const DiaryProvider = ({ children }) => {
    const [isAddOpen, setIsAddOpen] = useState(false);

    // Lazy initializer (FR012): React calls this function only once, on the
    // first render, so the app starts already holding the stored entries.
    // If nothing is stored yet, getItem returns null and we fall back to [].
    const [entries, setEntries] = useState(() => {
        const stored = localStorage.getItem(storageKey);
        return stored ? JSON.parse(stored) : [];
    });

    // Save on every change (FR008): whenever entries changes, mirror it to
    // localStorage. 
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(entries));
    }, [entries]);

    // Named actions
    const openAddModal = () => setIsAddOpen(true);
    const closeAddModal = () => setIsAddOpen(false);

    const addEntry = (entry) => setEntries((prev) => [...prev, { ...entry, id: crypto.randomUUID() }]);


    return (
        <DiaryContext.Provider value={{ isAddOpen, openAddModal, closeAddModal, entries, addEntry }}>
            {children}
        </DiaryContext.Provider>
    );

};

export const useDiary = () => useContext(DiaryContext);

export default DiaryProvider;