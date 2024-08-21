import { StyledButton } from "./carouselButtonStyles";

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}Ver detalhes</StyledButton>;
};

export default Button;
