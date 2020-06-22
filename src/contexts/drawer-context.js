import { createContext, useState } from "react";
import utilities from "../utilities";

export const DrawerContext = createContext();

export default function DrawerContextProvider(props) {
  const [drawerState, setDrawerState] = useState(false);
  const [disabled, setDisabled] = useState(false);

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

  return (
    <DrawerContext.Provider
      value={{
        drawerState,
        drawerClose: drawerClose,
        drawerOpen: drawerOpen,
        drawerToggle: drawerToggle,
      }}
    >
      {props.children}
    </DrawerContext.Provider>
  );
}
