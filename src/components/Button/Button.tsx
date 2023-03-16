import "./Button.scss";

interface IButton {
  link?: string;
  label: string;
  width?: "md" | "lg";
  target?: string;
  showMobileOnly?: boolean;
  gaEventTracker: (action?: string, label?: string) => void;
}

const Button: React.FC<IButton> = ({
  link = "#",
  label,
  width = "md",
  showMobileOnly = false,
  gaEventTracker,
  ...props
}) => {
  return (
    <a
      className={
        "app__button button_width_" +
        width +
        (showMobileOnly ? " button-mobile-only" : "")
      }
      href={link}
      onClick={() => gaEventTracker(label)}
      {...props}
    >
      <span>{label}</span>
    </a>
  );
};

export default Button;
