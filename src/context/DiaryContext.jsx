import { createContext, useState, useContext } from "react";

const DiaryContext = createContext();

const DiaryProvider = ({ children }) => {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [entries, setEntries] = useState([]);

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