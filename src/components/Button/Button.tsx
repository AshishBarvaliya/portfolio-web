import "./Button.scss";

interface IButton {
  link?: string;
  label: string;
  width?: "md" | "lg";
  target?: string;
}

const Button: React.FC<IButton> = ({
  link = "#",
  label,
  width = "md",
  ...props
}) => {
  return (
    <a className={"app__button button_width_" + width} href={link} {...props}>
      <span>{label}</span>
    </a>
  );
};

export default Button;
