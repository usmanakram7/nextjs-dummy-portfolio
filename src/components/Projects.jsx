import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/assets/gallery/project1.jpg";
import project2 from "../../public/assets/gallery/project2.jpg";
import project3 from "../../public/assets/gallery/project3.jpg";
import project4 from "../../public/assets/gallery/project4.jpg";

const Projects = () => {
  return (
    <div className="w-full lg:h-screen py-2 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-wider py-2 text-xl text-[#5e51e5] font-bold">
          Projects
        </p>
        <h1 className="py-4">What I have Built</h1>

        <div className="grid md:grid-cols-2  gap-8">
          <div className="relative flex items-center justify-center rounded-xl h-auto w-full shadow-xl shadow-gray-400 p-4 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff] cursor-pointer ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={project1}
            />
            <div className="absolute top-[50%] left-[50%] hidden group-hover:block translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Project 1
              </h3>
              <p className="text-white text-center pb-4 p-2">
                This is ReactJs Project
              </p>
              <Link href={"/"}>
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:shadow-xl shadow-gray-600">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center rounded-xl h-auto w-full shadow-xl shadow-gray-400 p-4 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff] cursor-pointer ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={project2}
            />
            <div className="absolute top-[50%] left-[50%] hidden group-hover:block translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Project 2
              </h3>
              <p className="text-white text-center pb-4 p-2">
                This is React Native Project
              </p>
              <Link href={"/"}>
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:shadow-xl shadow-gray-600">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center rounded-xl h-auto w-full shadow-xl shadow-gray-400 p-4 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff] cursor-pointer ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={project3}
            />
            <div className="absolute top-[50%] left-[50%] hidden group-hover:block translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Project 3
              </h3>
              <p className="text-white text-center pb-4 p-2">
                This is Flutter Project
              </p>
              <Link href={"/"}>
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:shadow-xl shadow-gray-600">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center rounded-xl h-auto w-full shadow-xl shadow-gray-400 p-4 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff] cursor-pointer ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={project4}
            />
            <div className="absolute top-[50%] left-[50%] hidden group-hover:block translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Project 4
              </h3>
              <p className="text-white text-center pb-4 p-2">
                This is Vue Project
              </p>
              <Link href={"/"}>
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:shadow-xl shadow-gray-600">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
