import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

let supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function () {
      supportsPassive = true;
    },
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

function getSize() {
  if (typeof window !== "undefined") {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    };
  }
}

let defaultOptions = {
  throttle: 200,
};

export default function useWindowSize(options) {
  let opts = Object.assign({}, defaultOptions, options);

  let [windowSize, setWindowSize] = useState(getSize());

  let handleResize = throttle(() => {
    setWindowSize(getSize());
  }, opts.throttle);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
