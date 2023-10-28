import "./button.styles.scss";
/*
default

inverted

google sign in
*/
const Button = ({ children, buttonType, ...otherProps }) => {
  return <button className="button-container">{children}</button>;
};

export default Button;
