import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

import "./SocialMedia.scss";

const SocialMedia: React.FC = () => {
  return (
    <div className="app__navbar-social-media">
      <UseAnimations
        animation={github}
        loop
        size={40}
        strokeColor="var(--black-color)"
        onClick={() =>
          window.open("https://github.com/AshishBarvaliya", "_blank")
        }
      />
      <UseAnimations
        animation={linkedin}
        loop
        size={40}
        strokeColor="var(--black-color)"
        onClick={() =>
          window.open("https://www.linkedin.com/in/ashishbarvaliya", "_blank")
        }
      />
      <span />
    </div>
  );
};

export default SocialMedia;
