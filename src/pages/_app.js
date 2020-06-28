import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import GlobalContextProvider from "../contexts/global-context";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };
    const handleRouteComplete = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteComplete);
    Router.events.on("routeChangeError", handleRouteComplete);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
      Router.events.off("routeChangeComplete", handleRouteComplete);
      Router.events.off("routeChangeError", handleRouteComplete);
    };
  }, []);

  return (
    <>
      <GlobalContextProvider>
        <Navbar />
        {loading && <Loading />}
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
        <Drawer />
      </GlobalContextProvider>
    </>
  );
}
