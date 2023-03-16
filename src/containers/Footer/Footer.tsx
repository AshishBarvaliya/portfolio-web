import { motion } from "framer-motion";
import React from "react";
import { Credits } from "../../components";
import Button from "../../components/Button/Button";
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

import "./Footer.scss";

const Footer: React.FC = () => {
  const gaEventTrackerC = useAnalyticsEventTracker("Contacts");
  const email = process.env.REACT_APP_CONTACT_EMAIL;

  return (
    <>
      <div className="app__footer">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__footer-info"
        >
          <h2 id="contact" className="head-text">
            Get In Touch
          </h2>
          <div className="app_footer-content">
            <p>
              If you're in search of an outstanding full-stack developer with
              remarkable front-end expertise, an unyielding problem-solving
              mindset, and a collaborative spirit, then I am your ideal
              candidate. You can count on me to be available at all times.
            </p>
            <div className="app_footer-button-wrapper">
              <Button
                label="Say Hello"
                link={`mailto:${email}`}
                gaEventTracker={gaEventTrackerC}
                width="lg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <Credits />
    </>
  );
};

export default Footer;
