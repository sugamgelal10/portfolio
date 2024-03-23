import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { IoMdDownload } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToogle] = useState(false);
  const hambutton = () => {
    setToogle(!toggle);
    if (!toggle) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
  };
  return (
    <div className="">
      <div className="flex p-[16px] font-sora  flex-cols items-center justify-between">
        <div className="text-[24px] font-bold">Sugam Gelal</div>
        <div className=" hidden md:flex  md:gap-4  md:list-none md:mx-[16px]">
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
        </div>
        <button className="hidden md:flex md:items-center md:gap-2 md:bg-black md:text-white md:w-[153px] md:h-[56px] md:rounded-md justify-center hover:bg-#404040">
          Resume
          <IoMdDownload />
        </button>
        {!toggle ? (
          <GiHamburgerMenu className="md:hidden" onClick={hambutton} />
        ) : (
          <GiCancel className="md:hidden" onClick={hambutton} />
        )}
      </div>
      {toggle && (
        <motion.div
        className="menu-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="menu-items"
          initial={{ x: "100%" }}
          animate={{ x: '0%' }}
          transition={{ duration: 0.5 }}
        >
        <div className=" flex flex-col gap-4 font-sora items-end list-none mx-[16px] bg-zinc-300 h-[100vh] md:hidden">
          <div className=" flex flex-col gap-4 items-end p-[16px] ">
            <li>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact Me</li>
            <li>
              <button className="flex items-center gap-2 bg-black text-white w-[153px] h-[56px] rounded-md justify-center hover:bg-#404040">
                Resume
                <IoMdDownload />
              </button>
            </li>
          </div>
        </div>
        </motion.div>
        </motion.div>
      )}
    </div>
    
  );
};

export default Navbar;
