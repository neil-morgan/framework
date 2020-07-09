import { createContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import utilities from "../utilities";
import Config from "../config";

const { debug, palette } = Config();

export const GlobalContext = createContext();

export default function GlobalContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [drawerState, setDrawerState] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }
  function logout() {
    setIsLoggedIn(false);
  }

  function drawerClose() {
    setDrawerState(!1);
    utilities.scrollLock.enableScroll();
  }

  function drawerOpen() {
    setDrawerState(!0);
    utilities.scrollLock.disableScroll();
  }

  function drawerToggle() {
    !0 === drawerState ? drawerClose() : drawerOpen();
  }

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        login: login,
        logout: logout,
        drawerState,
        drawerClose: drawerClose,
        drawerOpen: drawerOpen,
        drawerToggle: drawerToggle,
      }}
    >
      {debug && <Debug />}

      <ThemeProvider theme={palette}>
        <GlobalStyle />
        {props.children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

const Debug = createGlobalStyle`
    *:not(path):not(g) {
        color: hsla(210, 100%, 100%, 0.9) !important;
        background: hsla(210, 100%, 50%, 0.5) !important;
        background-size: 10px 10px !important;
        background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px) !important;
        outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
        box-shadow: none !important; 
    }
`;

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Roboto';
      src: url('fonts/Roboto-Regular.ttf');
      src: url('fonts/Roboto-Bold.ttf');
      src: url('fonts/Roboto-Black.ttf');
      src: url('fonts/Roboto-Light.ttf');
  }
  @font-face {
    font-family: 'Nunito';
      src: url('fonts/Nunito-Regular.ttf');
      src: url('fonts/Nunito-Bold.ttf');
      src: url('fonts/Nunito-Black.ttf');
      src: url('fonts/Nunito-Light.ttf');
  }

 *,
::after,
::before {
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: inherit;
    min-height: 0;
    padding: 0;
    margin: 0;
}

html {
    width:100%;
    font-size: 62.5%;
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
    overflow-y: scroll;
    background: ${({ theme }) => theme.background};
}

html, body, #__next, main, main > div  {
    min-height:100%;
}

button,
textarea,
input,
select {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline:none;
}
`;
