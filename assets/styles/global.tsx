import { Global } from "@emotion/react";

import font from './fonts';
import { mq } from './mediaqueries';

export const headerHeights = [
    75,
    120,
];
export const drawerClosedWidth = 75;
export const drawerWidths = [
    222,
]

export const sectionPaddings = [
    [40, 25]
]

export const defaultTransition = "all .3s ease-out";

export const visuallyHidden = {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
};

const globalStyles = (
    <Global
        styles={{
            '*': {
                boxSizing: "border-box",
            },

            'html, body': {
                margin: 0,
                padding: 0,
            },

            body: {
                fontSize: "1rem",
                minHeight: "100vh",
                fontFamily: font,

                "& > #__next": {
                    minHeight: "100vh",
                },
            },

            ul: {
                padding: 0,
                margin: 0,
                listStyle: "none",
            },

            a: {
                color: "inherit",
                textDecoration: "none",
            },
        }}
    />
);

export default globalStyles;