import { FaPlus } from "react-icons/fa";
import { useDiary } from "../context/DiaryContext";

const Hero = () => {
  const { openAddModal } = useDiary();
  return (
    <section className="bg-pink flex flex-col items-center gap-8 pt:10 pb-20 lg:pt-16 px-4">
      <h1 className="font-pliant text-navy text-3xl sm:text-5xl font-medium text-center max-w-xl flex flex-col">
        <span>Every day has a story.</span>
        <span>Write yours.</span>
      </h1>
      <button onClick={openAddModal} className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-navy border-2 border-navy font-nunito text-white font-bold px-10 rounded-full cursor-pointer flex items-center gap-2 hover:bg-yellow hover:text-navy">
        <FaPlus />
        Add Entry
      </button>
    </section>
  );
};

export default Hero;
