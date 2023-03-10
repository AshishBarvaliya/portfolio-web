import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import SocialMedia from "../SocialMedia/SocialMedia";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const navlinks: string[] = [
    "home",
    "experiences",
    "projects",
    // "skills",
    "contact",
  ];

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={"logo-nav.png"} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {navlinks.map((item: string) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {navlinks.map((item: string) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
      <div className="app__navbar-left-section">
        <SocialMedia />
      </div>
    </>
  );
};

export default Navbar;
