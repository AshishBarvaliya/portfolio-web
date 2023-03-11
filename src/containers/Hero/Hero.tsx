import { motion } from "framer-motion";

import "./Hero.scss";
import React from "react";
import Button from "../../components/Button/Button";

const email = process.env.REACT_APP_CONTACT_EMAIL;

const Hero: React.FC = () => (
  <div className="app__hero app__flex">
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__hero-info"
    >
      <div className="app__hero-content">
        <div className="app__flex">
          <div>
            <p className="p-text">Hello, My name is</p>
            <h1 className="head-text">Ashish Baravaliya</h1>
          </div>
        </div>

        <div className="app__flex">
          <p className="p-text">Full Stack Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
      <div className="app__hero-button-group">
        <Button label={"Contact"} link={`mailto:${email}`} />
        <Button label={"Resume"} />
      </div>
    </motion.div>
  </div>
);

export default Hero;
