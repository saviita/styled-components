import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.$color};
    background-color: ${({$color}) => $color};

    padding: ${props => props.paddings};

`
export {StyledButton}