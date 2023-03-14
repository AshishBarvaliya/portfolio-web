import "./Button.scss";

interface IButton {
  link?: string;
  label: string;
  width?: "md" | "lg";
  target?: string;
  showMobileOnly?: boolean;
}

const Button: React.FC<IButton> = ({
  link = "#",
  label,
  width = "md",
  showMobileOnly = false,
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
      {...props}
    >
      <span>{label}</span>
    </a>
  );
};

export default Button;
