function brightness(color, percent) {
  var num = parseInt(color.toString().replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

class DomUtils {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  static keys = {
    32: 1,
    33: 1,
    34: 1,
    35: 1,
    36: 1,
    37: 1,
    38: 1,
    39: 1,
    40: 1,
  };

  static preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  static preventDefaultForScrollKeys(e) {
    if (DomUtils.keys[e.keyCode]) {
      DomUtils.preventDefault(e);
      return false;
    }
  }

  static disableScroll() {
    if (typeof document !== "undefined") {
      document.addEventListener("wheel", DomUtils.preventDefault, {
        passive: false,
      }); // Disable scrolling in Chrome
      document.addEventListener(
        "keydown",
        DomUtils.preventDefaultForScrollKeys,
        {
          passive: false,
        }
      );

      document.addEventListener("touchmove", DomUtils.preventDefault, {
        passive: false,
      });
    }
  }

  static enableScroll() {
    if (typeof document !== "undefined") {
      document.removeEventListener("wheel", DomUtils.preventDefault, {
        passive: false,
      }); // Enable scrolling in Chrome
      document.removeEventListener(
        "keydown",
        DomUtils.preventDefaultForScrollKeys,
        {
          passive: false,
        }
      ); // Enable scrolling in Chrome
      document.removeEventListener("touchmove", DomUtils.preventDefault, {
        passive: false,
      });
    }
  }
}

const utilities = {
  brightness,
  DomUtils,
};

export default utilities;
