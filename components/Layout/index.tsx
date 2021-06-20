import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import useDarkMode from 'use-dark-mode';

import { useEffect } from "react";
import { darkTheme, lightTheme } from "../../assets/styles/theme";

import Container from "../Container";
import Header from "../Header";
import { StyledLayout } from './styles';


const Layout: React.FC<{}> = ({ children }) => {
  const { value } = useDarkMode(false, { storageKey: undefined, onChange: undefined })
  const userTheme = value ? darkTheme : lightTheme

  const [theme, setTheme] = useState(userTheme);
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    setTheme(isLight ? lightTheme : darkTheme);
  }, [isLight]);

  return(
      <ThemeProvider theme={theme}>
        <StyledLayout theme={theme}>
          <Header setIsLight={setIsLight} />
          <Container>
              {children}
          </Container>
        </StyledLayout>
      </ThemeProvider>
  );
};

export default Layout;