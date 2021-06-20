// THEME
export interface IBackgroundTheme {
    primary: string;
    secondary: string;
}
export interface ITextTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    quarternary: string;
}
export interface IButtonTheme {
    bg: string;
    text: string;
    hover: string;
    focus: string;
    disabled: string;
    disabledHover: string;
}
export interface IHeaderTheme {
    bg: string;
    inputBg: string;
    text: string;
    placeholder: string;
}
export interface IThemeSwitcher {
    bg: string;
    icon: string;
}