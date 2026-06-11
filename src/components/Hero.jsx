import { FaPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-pink flex flex-col items-center gap-8 py-20 px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center max-w-xl">
        Lorem ipsum dolor sit amet
      </h1>
      <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-navy border-2 border-navy text-white font-semibold px-10 rounded-full cursor-pointer flex items-center gap-2 hover:bg-transparent hover:text-navy">
        <FaPlus />
        Add Entry
      </button>
    </section>
  );
};

export default Hero;
