import { AnimatePresence } from "framer-motion";
import GlobalContextProvider from "../contexts/global-context";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <GlobalContextProvider>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
        <Drawer />
      </GlobalContextProvider>
    </>
  );
}
