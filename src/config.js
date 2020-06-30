import { css } from "styled-components";

export const BASE_CONF = {
  debug: false,
  gridSize: 12,
  gutterWidth: 2,
  outerMargin: 0.5,
  mediaQuery: "only screen",
  container: {
    sm: 60, // rem
    md: 80, // rem
    lg: 111, // rem
  },
  breakpoints: {
    xs: 0, // em
    sm: 40, // em
    md: 53, // em
    lg: 75, // em
  },
  colors: {
    red: "#f44336",
    pink: "#e91e63",
    purple: "#9c27b0",
    violet: "#673ab7",
    indigo: "#3f51b5",
    blue: "#2196f3",
    azure: "#03a9f4",
    cyan: "#00bcd4",
    teal: "#009688",
    green: "#4caf50",
    tea: "#8bc34a",
    lime: "#cddc39",
    yellow: "#ffeb3b",
    amber: "#ffc107",
    orange: "#ff9800",
    carrot: "#ff5722",
    brown: "#795548",
    grey: "#9e9e9e",
    steel: "#607d8b",
  },
};

const COLOR_PALETTE = {
  primary: "#806CE9",
  secondary: "#5FBBE8",
  tertiary: "xyz",
  text: "#FFFFFF",
  foreground: "#2F3238",
  background: "#212327",
};

const DIMENSION_NAMES = ["xs", "sm", "md", "lg"];

const configCache = [];

const resolveConfig = () => {
  const conf = {
    ...BASE_CONF,
    container: {
      ...BASE_CONF.container,
    },
    breakpoints: {
      ...BASE_CONF.breakpoints,
    },
    palette: {
      ...COLOR_PALETTE,
    },
    dimensions: DIMENSION_NAMES,
  };

  function makeMedia(media) {
    return (...args) => css`
      @media ${media} {
        ${css(...args)}
      }
    `;
  }

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint];
    media[breakpoint] = makeMedia(
      [conf.mediaQuery, breakpoint !== 0 && `(min-width: ${breakpointWidth}em)`]
        .filter(Boolean)
        .join(" and ")
    );
    return media;
  }, {});
  return conf;
};

export default function Config(props) {
  const conf = resolveConfig(props);
  configCache[0] = conf;
  return conf;
}
