import { motion } from "framer-motion";

import "./Hero.scss";
import React from "react";
import Button from "../../components/Button/Button";
import AnimatedText from "../../components/AnimatedText/AnimatedText";

const email = process.env.REACT_APP_CONTACT_EMAIL;

const Hero: React.FC = () => (
  <div id="home" className="app__hero app__flex">
    <motion.div
      whileInView={{ y: [50, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__hero-info"
    >
      <div className="app__hero-content">
        <div className="app__hero-text-container">
          <p className="app__hero-head-text-small">Hello, my name is</p>
          <h1 className="app__hero-head-text">Ashish Baravaliya,</h1>
          <p className="app__hero-subhead-text">
            A <AnimatedText />
          </p>
          <p className="app__hero-head-text-small">
            I'm an experienced front-end developer with over 3 years of work
            experience in a multinational corporation in India, currently
            pursuing post-graduation studies in full-stack software development.
            Additionally, working as a senior software developer for freelance
            projects on a part-time basis.
          </p>
        </div>
      </div>
      <div className="app__hero-button-group">
        <Button label={"Contact"} link={`mailto:${email}`} />
        <Button label={"Resume"} link={"Resume.pdf"} target="_blank" />
      </div>
    </motion.div>
  </div>
);

export default Hero;
