import "@emotion/react";
import { IBackgroundTheme, IButtonTheme, IHeaderTheme, ITextTheme, IThemeSwitcher } from "../../utils/types";
import { 
  danger,
  dangerDark,
  dangerLight,
  dangerLighter,
  gray200,
  gray300, 
  gray600, 
  gray700, 
  gray800, 
  grayBlack, 
  grayWhite, 
  primaryColor, 
  primaryColorDark, 
  primaryColorLight,
  primaryColorLighter,
  success,
  successDark,
  successLight,
  successLighter
} from "./colors";

declare module "@emotion/react" {
  export interface Theme {
    // default
    fontSizes: string[],
    fontWeights: {
      body: number,
      heading: number,
    },
    lineHeights: {
      body: number,
      heading: number,
    },
    // custom
    bg: IBackgroundTheme;
    text: ITextTheme;
    button: {
      primary: IButtonTheme;
      secondary: IButtonTheme;
      success: IButtonTheme;
      danger: IButtonTheme;
    };
    header: IHeaderTheme;
    themeSwitch: IThemeSwitcher;
  }
}

const light = {
  bg: {
    primary: grayWhite,
    secondary: primaryColor,
  },
  text: {
    primary: grayBlack,
    secondary: grayWhite,
    tertiary: gray700,
    quarternary: gray600,
  },
  button: {
    primary: {
      bg: primaryColor,
      text: grayWhite,
      hover: primaryColorDark,
      focus: primaryColorDark,
      disabled: primaryColorLight,
      disabledHover: primaryColorLighter
    },
    secondary: {
      bg: grayWhite,
      text: grayBlack,
      hover: gray200,
      focus: gray200,
      disabled: gray200,
      disabledHover: gray300
    },
    success: {
      bg: success,
      text: grayWhite,
      hover: successDark,
      focus: successDark,
      disabled: successLight,
      disabledHover: successLighter
    },
    danger: {
      bg: danger,
      text: grayWhite,
      hover: dangerDark,
      focus: dangerDark,
      disabled: dangerLight,
      disabledHover: dangerLighter
    }
  },
  header: {
    bg: primaryColor,
    inputBg: grayWhite,
    text: grayBlack,
    placeholder: `${grayBlack}75`
  },
  themeSwitch: {
    bg: grayWhite,
    icon: grayBlack,
  },
}

const dark = {
  bg: {
    primary: grayBlack,
    secondary: primaryColorLight,
    inset: gray800,
    input: gray700,
  },
  text: {
      primary: grayWhite,
      secondary: grayBlack,
      tertiary: gray200,
      quarternary: gray300,
  },
  button: {
    primary: {
      bg: primaryColor,
      text: grayWhite,
      hover: primaryColorDark,
      focus: primaryColorDark,
      disabled: primaryColorLight,
      disabledHover: primaryColorLighter
    },
    secondary: {
      bg: grayWhite,
      text: grayBlack,
      hover: gray200,
      focus: gray200,
      disabled: gray200,
      disabledHover: gray300
    },
    success: {
      bg: success,
      text: grayWhite,
      hover: successDark,
      focus: successDark,
      disabled: successLight,
      disabledHover: successLighter
    },
    danger: {
      bg: danger,
      text: grayWhite,
      hover: dangerDark,
      focus: dangerDark,
      disabled: dangerLight,
      disabledHover: dangerLighter
    }
  },
  header: {
    bg: grayBlack,
    inputBg: grayBlack,
    text: grayWhite,
    placeholder: `${grayWhite}75`
  },
  themeSwitch: {
    bg: gray800,
    icon: grayBlack,
  },
}

const defaultTheme = {
  fontSizes: [
    '0.875rem', // 0
    '1rem', // 1
    '1.125rem', // 2
    '1.375rem', // 3
    '1.625rem', // 4
    '2rem', // 5
    '2.5rem'  // 6
  ],
  fontWeights: {
    body: 400,
    heading: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
};

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }