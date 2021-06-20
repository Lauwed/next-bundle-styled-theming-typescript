import { defaultTransition } from "../../assets/styles/global";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

interface IStyledLayout {
    theme: Theme;
}

export const StyledLayout = styled.div<IStyledLayout>(({ theme }) => ({
    backgroundColor: theme.bg.primary,
    transition: defaultTransition
}));