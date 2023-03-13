import React from "react";
import { FaLinkedinIn, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div
        className="max-w-[1240px] w-full h-full flex-col mx-auto p-2 flex justify-center items-center
      "
      >
        <div>
          <p className="uppercase text-gray-600 tracking-widest">
            Let's Build something togather
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5e51e5]">Usman</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
            I am a frontend developer Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Sint, facere. Blanditiis deleniti natus doloribus
            quo consequuntur repudiandae, dignissimos enim excepturi
            reprehenderit nisi vitae dicta possimus obcaecati deserunt atque
            beatae tenetur nam
          </p>
        </div>
        <div className="max-w-[350px] gap-6 border mx-auto flex justify-between items-center pt-8">
          <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 md:p-6  ease-in hover:scale-110 duration-300">
            <FaLinkedinIn size={20} />
          </div>
          <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 md:p-6 ease-in hover:scale-110 duration-300">
            <FaTwitter size={20} />
          </div>
          <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 md:p-6 ease-in hover:scale-110 duration-300">
            <FaFacebook size={20} />
          </div>
          <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 md:p-6 ease-in hover:scale-110 duration-300">
            <FaGithub size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
