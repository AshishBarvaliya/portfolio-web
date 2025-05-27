import { motion } from "framer-motion";

import "./Hero.scss";
import React from "react";
import Button from "../../components/Button/Button";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

const email = process.env.REACT_APP_CONTACT_EMAIL;

const Hero: React.FC = () => {
  const gaEventTrackerSM = useAnalyticsEventTracker("Social Media");
  const gaEventTrackerC = useAnalyticsEventTracker("Contacts");

  return (
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
              <AnimatedText />
            </p>
            <p className="app__hero-head-text-small">
              I am a Product-focused and results-driven Senior Frontend Engineer
              with over 5 years of experience architecting and delivering
              scalable, performant web applications. Proven expertise in leading
              UI development, establishing robust design systems, and shipping
              high-quality, production-ready code. Adept at navigating both
              enterprise and fast-paced startup environments, with a strong
              commitment to balancing technical excellence with business
              objectives. Actively contributed to open-source projects (Parse,
              Directus) and seamlessly managed real-world software delivery
              alongside postgraduate studies.
            </p>
          </div>
        </div>
        <div className="app__hero-button-group">
          <Button
            label={"Contact"}
            link={`mailto:${email}`}
            gaEventTracker={gaEventTrackerC}
          />
          <Button
            label={"Resume"}
            link={"Resume.pdf"}
            gaEventTracker={gaEventTrackerC}
            target="_blank"
          />
          <Button
            label={"Github"}
            link={"https://github.com/AshishBarvaliya"}
            target="_blank"
            gaEventTracker={gaEventTrackerSM}
            showMobileOnly
          />
          <Button
            label={"Linkedin"}
            link={"https://www.linkedin.com/in/ashishbarvaliya"}
            target="_blank"
            gaEventTracker={gaEventTrackerSM}
            showMobileOnly
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
