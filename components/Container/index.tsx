import { StyledContainer } from "./styles";
import { useTheme } from "@emotion/react";

const Container: React.FC<{}> = ({ children }) => {
    const theme = useTheme();

    return (
        <StyledContainer theme={theme}>
            {children}
        </StyledContainer>
    )
}

export default Container;