import "./Button.scss";

interface IButton {
  link?: string;
  label: string;
  width?: "md" | "lg";
}

const Button: React.FC<IButton> = ({ link = "#", label, width = "md" }) => {
  return (
    <a className={"app__button button_width_" + width} href={link}>
      <span>{label}</span>
    </a>
  );
};

export default Button;
