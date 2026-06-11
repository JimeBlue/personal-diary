import { FaPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-pink flex flex-col items-center gap-8 py-20 px-4">
      <h1 className="font-pliant text-3xl sm:text-5xl font-medium text-center max-w-xl">
        Every day has a story. Write yours
      </h1>
      <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-navy border-2 border-navy font-nunito text-white font-bold px-10 rounded-full cursor-pointer flex items-center gap-2 hover:bg-transparent hover:text-navy">
        <FaPlus />
        Add Entry
      </button>
    </section>
  );
};

export default Hero;
