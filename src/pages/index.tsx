import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center text-white items-center ">
      <div className="text-2xl ">Who is the best Pokémon?</div>
      <div className="p-2"></div>
      <div className="p-2 flex justify-between items-center gap-24  border-gray-300 border-2 ">
        <div className="h-12 w-12 bg-teal-500"></div>
        <div className="">VS</div>
        <div className="h-12 w-12 bg-teal-500"></div>
      </div>
    </div>
  );
};

export default Home;
