import Image from "next/image";
import React from "react";
import project1 from "../../public/assets/gallery/project1.jpg";
import { FaLinkedinIn, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen pt-28">
      <div className="max-w-[1240px] m-auto px-2 py-16 ">
        <p className="uppercase tracking-wider py-2 text-xl text-[#5e51e5] font-bold">
          Contact
        </p>
        <h1 className="py-4">Get In Touch</h1>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={project1}
                  alt="/"
                />
              </div>
              <div>
                <h1 className="py-2">Usman Akram</h1>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full time freelance or full time positions,
                  contact me and let's talk.
                </p>
              </div>
              <div className="pt-16">
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex w-full items-center justify-between py-4">
                  <div className="flex w-full justify-between items-center gap-2 py-4">
                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-4 md:p-6 ease-in hover:scale-105 duration-300">
                      <FaLinkedinIn size={20} />
                    </div>
                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-4 md:p-6 ease-in hover:scale-105 duration-300">
                      <FaTwitter size={20} />
                    </div>
                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-4 md:p-6 ease-in hover:scale-105 duration-300">
                      <FaFacebook size={20} />
                    </div>
                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-4 md:p-6 ease-in hover:scale-105 duration-300">
                      <FaGithub size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <form action="" className="p-2">
              <div className="grid md:grid-cols-2 gap-4 py-2 ">
                <div className="flex flex-col">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="uppercase text-sm py-2">
                  Email
                </label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="uppercase text-sm py-4">
                  Subject
                </label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="uppercase text-sm py-4">
                  Message
                </label>
                <textarea
                  rows="10"
                  className="border-2 rounded-lg p-3 border-gray-300"
                />
              </div>
              <button className="w-full mt-4 py-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
