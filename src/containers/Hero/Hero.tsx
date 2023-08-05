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
  const gaEventTrackerOSC = useAnalyticsEventTracker("Open Source");

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
              I'm an experienced software developer with over 4 years of work
              experience in a multinational corporation in India, currently
              pursuing post-graduation studies in full-stack software
              development. Additionally, working as a senior software developer
              for freelance projects on a part-time basis, I also contribute to
              open source projects for platforms like
              <a
                href="https://github.com/parse-community/parse-dashboard"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTrackerOSC("Parse Dashboard")}
                className="app_hero-desc-link"
              >
                Parse Community
              </a>
              and
              <a
                href="https://github.com/directus/directus"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTrackerOSC("Directus")}
                className="app_hero-desc-link"
              >
                Directus
              </a>
              among others.
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
