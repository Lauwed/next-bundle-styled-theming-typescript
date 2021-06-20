import { useState } from "react"
import { StyledSwitch } from "./styles";

interface IThemeSwitch {
    setIsLight: (checked: boolean) => void
}
const ThemeSwitch = ({ setIsLight }: IThemeSwitch) => {
    const [checked, setChecked] = useState(true);

    const handleOnChange = () => {
        setChecked(!checked);

        setIsLight(!checked);
    };

    return (
        <StyledSwitch>
            <input type="checkbox" id="theme-switch" name="theme-switch" onChange={() => handleOnChange()} checked={checked} />
            <label htmlFor="theme-switch">Changement de thème.</label>
        </StyledSwitch>
    );
};

export default ThemeSwitch;