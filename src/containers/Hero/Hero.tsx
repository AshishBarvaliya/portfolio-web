import { motion } from "framer-motion";

// import { AppWrap } from "../../wrapper";
// import { images } from "../../constants";
import "./Hero.scss";
import React from "react";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Hero: React.FC = () => (
  <div className="app__hero app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__hero-info"
    >
      <div className="app__hero-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Ashish</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__hero-circles"
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}
  </div>
);

export default Hero;
// export default AppWrap(Hero, "home");
