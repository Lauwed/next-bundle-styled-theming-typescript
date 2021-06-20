import styled from "@emotion/styled";
import { mq } from '../../assets/styles/mediaqueries';
import { defaultTransition, headerHeights } from "../../assets/styles/global";
import { Theme } from "@emotion/react";

interface ITheme {
  theme: Theme;
}

export const StyledHeader = styled.header(({ theme }: ITheme) => ({
  width: "100%",
  minHeight: headerHeights[0],
  backgroundColor: theme.header.bg,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  transition: defaultTransition,

  [mq[1]]: {
    height: headerHeights[1],
  }
}));

export const headerLoginLogoStyle = {
  // Hide the text
  whiteSpace: "nowrap",
  textIndent: "-2000000%",
  display: "inline-block",
  overflow: "hidden",
  margin: 0,

  height: 50,
  maxWidth: 50,
  backgroundImage: "url(/logo_min.svg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",

  transition: defaultTransition,

  [mq[1]]: {
      backgroundImage: "url(/logo.svg)",
      maxWidth: "none",
  }
}