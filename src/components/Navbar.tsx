import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]  bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 xl:px-16">
        <Image
          src="/../public/assets/gallery/logo.png"
          alt="/"
          width="70"
          height="10"
        />

        <div>
          <ul className="md:flex hidden">
            <Link href={""}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={""}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href={""}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Services
              </li>
            </Link>
            <Link href={""}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href={""}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          navbar
            ? "md:hidden fixed h-full w-full left-0 top-0 bg-black/70 ease-in duration-300"
            : ""
        }
      >
        <div
          className={
            navbar
              ? "md:hidden fixed h-screen top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center">
            <div>
              <Image
                src="/../public/assets/gallery/logo.png"
                alt={"/"}
                width={60}
                height={40}
              />
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              lets build some legendary together
            </p>
          </div>
          <div>
            <ul className="uppercase py-4 flex flex-col">
              <Link href={"/"}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href={"/"}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href={"/"}>
                <li className="py-4 text-sm">Services</li>
              </Link>
              <Link href={"/"}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href={"/"}>
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-wide text-[#5651e5]">
                Let's Connect
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 py-4">
              <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 ease-in hover:scale-105 duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 ease-in hover:scale-105 duration-300">
                <FaTwitter />
              </div>
              <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 ease-in hover:scale-105 duration-300">
                <FaFacebook />
              </div>
              <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 ease-in hover:scale-105 duration-300">
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
