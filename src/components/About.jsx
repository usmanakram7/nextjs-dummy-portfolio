import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="md:h-screen w-full flex items-center justify-center gap-16">
      <div className="px-4 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-wider py-2 text-xl text-[#5e51e5] font-bold">
            About
          </p>
          <h1 className="py-4">Who I am</h1>
          <p className="py-2 text-gray-600">I am not Your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            distinctio eius commodi id officia dignissimos molestiae harum
            libero dicta rluta, sequi aliquid iste voluptas. Eum minima, ipsum
            dignissimos ducimus vitae dolor animi veritatis aspernatur
            repellendus. Optio, vel.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            distinctio eius commodi id officiedit nisi natus omnis asperiores
            necessitatibus obcaecat vitae dolor animi veritatis aspernatur
            repellendus. Optio, vel.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className=" md:w-[300px] h-auto shadow-lg hover:shadow-gray-500 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image
            src={"/../public/assets/gallery/about.jpg"}
            alt="/"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
