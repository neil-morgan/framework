import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { Debug } from "../components/GlobalStyle";
import utilities from "../utilities";
import Config from "../config";

const { debug, palette } = Config();

export const GlobalContext = createContext();

export default function GlobalContextProvider(props) {
  const [drawerState, setDrawerState] = useState(false);
  const [theme, setTheme] = useState("light");

  const drawerClose = () => {
    setDrawerState(!1);
    utilities.DomUtils.enableScroll();
  };

  const drawerOpen = () => {
    setDrawerState(!0);
    utilities.DomUtils.disableScroll();
  };

  const drawerToggle = () => {
    if (true === drawerState) {
      drawerClose();
    } else {
      drawerOpen();
    }
  };

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <GlobalContext.Provider
      value={{
        drawerState,
        drawerClose: drawerClose,
        drawerOpen: drawerOpen,
        drawerToggle: drawerToggle,
      }}
    >
      {debug && <Debug />}
      <GlobalStyle />
      <ThemeProvider
        theme={theme === "light" ? palette.light : palette.dark}
        themeToggle={themeToggle}
      >
        {props.children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
