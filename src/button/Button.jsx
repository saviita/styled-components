import { StyledButton } from "./button.styles";

const Button = ({children, color, padding}) => {
    return <StyledButton $color={color} $padding={padding}>{children}</StyledButton>
};
export default Button;
