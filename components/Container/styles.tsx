import styled from "@emotion/styled";
import { defaultTransition } from "../../assets/styles/global";
import { Theme } from "@emotion/react";

interface ITheme {
  theme: Theme;
}

export const StyledContainer = styled.main(({ theme }: ITheme) => ({
  backgroundColor: theme.bg.primary,
  transition: defaultTransition,
  minHeight: "100vh",
  color: theme.text.primary,

  display: "flex",
  flexDirection: "column",
  justifyContent: "Center",
  alignItems: "center"
}));