import { createContext, useState, useContext } from "react";

const DiaryContext = createContext();

const DiaryProvider = ({ children }) => {
    const [isAddOpen, setIsAddOpen] = useState(false);

    // Named actions instead of exposing setIsAddOpen directly
    const openAddModal = () => setIsAddOpen(true);
    const closeAddModal = () => setIsAddOpen(false);


    return (
        <DiaryContext.Provider value={{ isAddOpen, openAddModal, closeAddModal }}>
            {children}
        </DiaryContext.Provider>
    );

};

export const useDiary = () => useContext(DiaryContext);

export default DiaryProvider;