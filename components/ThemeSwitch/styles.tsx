import styled from "@emotion/styled";
import { defaultTransition } from "../../assets/styles/global";

export const StyledSwitch = styled.div(({ theme }) => ({
    marginRight: 25,
    cursor: "pointer",

    label: {
        // Hide the text
        whiteSpace: "nowrap",
        textIndent: "-2000000%",
        display: "inline-block",
        cursor: "pointer",

        // Shape the switch
        height: 20,
        width: 40,
        borderRadius: 20,
        backgroundColor: theme.themeSwitch.bg,
        position: "relative",
        transition: defaultTransition,

        "&::after": {
            content: `""`,
            width: 28,
            height: 28,
            borderRadius: 28,
            background: `${theme.themeSwitch.bg} url("./svg/moon.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
            backgroundPosition: "center",
            display: "inline-block",

            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translate(14px, -50%)",

            boxShadow: `8px 2px 25px ${theme.text.input}15`,

            transition: defaultTransition,
        }
    },
    input: {
        appearance: "none",

        "&:checked": {
            "& + label": {
                "&::after": {
                    transform: "translateY(-50%)",
                    background: `${theme.themeSwitch.bg} url("./svg/sun.svg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "50%",
                    backgroundPosition: "center",
                }
            }
        }
    }
}));