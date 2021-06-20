/** @jsxImportSource @emotion/react */
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "@emotion/react";

import { StyledHeader } from "./styles";

interface IHeader {
    setIsLight: (checked: boolean) => void
}
const Header = ({ setIsLight }:IHeader) => {
    const theme = useTheme();

    return (
        <StyledHeader theme={theme}>
            <ThemeSwitch setIsLight={setIsLight} />
        </StyledHeader>
    );
};

export default Header;