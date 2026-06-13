import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import EntryModal from "./components/EntryModal";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <EntryList />
      <AddEntryModal />
      <EntryModal />

    </>
  );
}

export default App;

