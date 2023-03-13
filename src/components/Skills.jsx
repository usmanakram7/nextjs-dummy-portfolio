import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen py-2 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-wider py-2 text-xl text-[#5e51e5] font-bold">
          About
        </p>
        <h1 className="py-4">What I Can Do</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/../public/assets/gallery/react.png"}
                  width={64}
                  height={64}
                />
              </div>
              <h3>REACT</h3>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/../public/assets/gallery/html.png"}
                  width={64}
                  height={64}
                />
              </div>
              <h3>HTML</h3>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/../public/assets/gallery/css.png"}
                  width={64}
                  height={64}
                />
              </div>
              <h3>CSS</h3>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/../public/assets/gallery/javascript.png"}
                  width={64}
                  height={64}
                />
              </div>
              <h3>Javascript</h3>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/../public/assets/gallery/tailwind.png"}
                  width={64}
                  height={64}
                />
              </div>
              <h3>Tailwind</h3>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/../public/assets/gallery/flutter.png"}
                  width={64}
                  height={64}
                />
              </div>
              <h3>Flutter</h3>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/../public/assets/gallery/react.png"}
                  width={64}
                  height={64}
                />
              </div>
              <h3>REACT</h3>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/../public/assets/gallery/react.png"}
                  width={64}
                  height={64}
                />
              </div>
              <h3>REACT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
