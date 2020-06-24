import { AnimatePresence } from "framer-motion";
import DrawerContextProvider from "../contexts/drawer-context";
import GlobalStyle, { Debug } from "../components/GlobalStyle";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import config from "../config";

const { debug } = config();

export default function App({ Component, pageProps, router }) {
  return (
    <>
      {debug && <Debug />}
      <GlobalStyle />
      <DrawerContextProvider>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
        <Drawer />
      </DrawerContextProvider>
    </>
  );
}
