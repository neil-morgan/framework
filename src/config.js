import { css } from "styled-components";

export default function Config(props) {
  return resolveConfig(props);
}

function resolveConfig() {
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

  conf.preset = (obj) => {
    let arr = [];
    for (let [key, bp] of Object.entries(obj))
      for (let [preset, css] of Object.entries(PRESETS))
        key === preset &&
          ("string" == typeof bp
            ? arr.push(Config().media[bp]`${css}`)
            : arr.push(`${css}`));
    return arr;
  };

  return conf;
}

const BASE_CONF = {
  debug: false,
  gridSize: 12,
  gutterWidth: 2,
  outerMargin: 0.5,
  mediaQuery: "only screen",
  container: {
    sm: 75, // rem
    md: 111, // rem
    lg: 111, // rem
  },
  breakpoints: {
    xs: 0, // em
    sm: 50, // em
    md: 75, // em
    lg: 100, // em
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
  secondary: "#4C94EB",
  tertiary: "#7F9C38",
  text: "#FFFFFF",
  foreground: "#2F3238",
  background: "#212327",
};

const DIMENSION_NAMES = ["xs", "sm", "md", "lg"];

const PRESETS = {
  w_auto: `width: auto;`,
  w_25: `width: 25%;`,
  w_50: `width: 50%;`,
  w_75: `width: 75%;`,
  w_100: `width: 100%;`,
  h_auto: `height: auto;`,
  h_25: `height: 25%;`,
  h_50: `height: 50%;`,
  h_75: `height: 75%;`,
  h_100: `height: 100%;`,
  ta_left: `text-align: left;`,
  ta_center: `text-align: center;`,
  ta_right: `text-align: right;`,
  zi_0: `z-index: 0;`,
  zi_1: `z-index: 1;`,
  zi_2: `z-index: 2;`,
  zi_3: `z-index: 3;`,
  zi_4: `z-index: 4;`,
  zi_5: `z-index: 5;`,
  zi_6: `z-index: 6;`,
  zi_7: `z-index: 7;`,
  zi_8: `z-index: 8;`,
  zi_9: `z-index: 9;`,
  zi_10: `z-index: 10;`,
  f_row: `flex-direction: row;`,
  f_rowReverse: `flex-direction: row-reverse;`,
  f_col: `flex-direction: column;`,
  f_colReverse: `flex-direction: column-reverse;`,
  f_wrap: `flex-wrap: wrap;`,
  f_wrapReverse: `flex-wrap: wrap-reverse;`,
  f_nowrap: `flex-wrap: nowrap;`,
  f_fill: `flex: 1 1 auto;`,
  o_first: `order: -1;`,
  o_last: `order: 13;`,
  o_1: `order: 1;`,
  o_2: `order: 2;`,
  o_3: `order: 3;`,
  o_4: `order: 4;`,
  o_5: `order: 5;`,
  o_6: `order: 6;`,
  o_7: `order: 7;`,
  o_8: `order: 8;`,
  o_9: `order: 9;`,
  o_10: `order: 10;`,
  o_11: `order: 11;`,
  o_12: `order: 12;`,
  as_auto: `align-self: auto;`,
  as_start: `align-self: flex-start;`,
  as_center: `align-self: center;`,
  as_end: `align-self: flex-end;`,
  as_baseline: `align-self: baseline;`,
  as_stretch: `align-self: stretch;`,
  ac_start: `align-content: flex-start;`,
  ac_center: `align-content: center;`,
  ac_end: `align-content: flex-end;`,
  ac_between: `align-content: space-between;`,
  ac_around: `align-content: space-around;`,
  ac_stretch: `align-content: stretch;`,
  ai_start: `align-items: flex-start;`,
  ai_center: `align-items: center;`,
  ai_end: `align-items: flex-end;`,
  ai_baseline: `align-items: baseline;`,
  ai_stretch: `align-items: stretch;`,
  jc_start: `justify-content: flex-start;`,
  jc_center: `justify-content: center;`,
  jc_end: `justify-content: flex-end;`,
  jc_evenly: `justify-content: space-evenly;`,
  jc_between: `justify-content: space-between;`,
  jc_around: `justify-content: space-around;`,
  m_a: `margin: auto;`,
  my_auto: `margin-top: auto; margin-bottom: auto;`,
  mx_auto: `margin-left: auto; margin-right: auto;`,
  mt_auto: `margin-top: auto;`,
  mr_auto: `margin-right: auto;`,
  mb_auto: `margin-bottom: auto;`,
  ml_auto: `margin-left: auto;`,
  m_0: `margin: 0;`,
  my_0: `margin-top: 0; margin-bottom: 0;`,
  mx_0: `margin-left: 0; margin-right: 0;`,
  mt_0: `margin-top: 0;`,
  mr_0: `margin-right: 0;`,
  mb_0: `margin-bottom: 0;`,
  ml_0: `margin-left: 0;`,
  m_1: `margin: 1rem;`,
  my_1: `margin-top: 1rem; margin-bottom: 1rem;`,
  mx_1: `margin-left: 1rem; margin-right: 1rem;`,
  mt_1: `margin-top: 1rem;`,
  mr_1: `margin-right: 1rem;`,
  mb_1: `margin-bottom: 1rem;`,
  ml_1: `margin-left: 1rem;`,
  m_2: `margin: 2rem;`,
  my_2: `margin-top: 2rem; margin-bottom: 2rem;`,
  mx_2: `margin-left: 2rem; margin-right: 2rem;`,
  mt_2: `margin-top: 2rem;`,
  mr_2: `margin-right: 2rem;`,
  mb_2: `margin-bottom: 2rem;`,
  ml_2: `margin-left: 2rem;`,
  m_3: `margin: 3rem;`,
  my_3: `margin-top: 3rem; margin-bottom: 3rem;`,
  mx_3: `margin-left: 3rem; margin-right: 3rem;`,
  mt_3: `margin-top: 3rem;`,
  mr_3: `margin-right: 3rem;`,
  mb_3: `margin-bottom: 3rem;`,
  ml_3: `margin-left: 3rem;`,
  m_n1: `margin: -1rem;`,
  my_n1: `margin-top: -1rem; margin-bottom: -1rem;`,
  mx_n1: `margin-left: -1rem; margin-right: -1rem;`,
  mt_n1: `margin-top: -1rem;`,
  mr_n1: `margin-right: -1rem;`,
  mb_n1: `margin-bottom: -1rem;`,
  ml_n1: `margin-left: -1rem;`,
  m_n2: `margin: -2rem;`,
  my_n2: `margin-top: -2rem; margin-bottom: -2rem;`,
  mx_n2: `margin-left: -2rem; margin-right: -2rem;`,
  mt_n2: `margin-top: -2rem;`,
  mr_n2: `margin-right: -2rem;`,
  mb_n2: `margin-bottom: -2rem;`,
  ml_n2: `margin-left: -2rem;`,
  m_n3: `margin: -3rem;`,
  my_n3: `margin-top: -3rem; margin-bottom: -3rem;`,
  mx_n3: `margin-left: -3rem; margin-right: -3rem;`,
  mt_n3: `margin-top: -3rem;`,
  mr_n3: `margin-right: -3rem;`,
  mb_n3: `margin-bottom: -3rem;`,
  ml_n3: `margin-left: -3rem;`,
  p_0: `padding: 0;`,
  py_0: `padding-top: 0; padding-bottom: 0;`,
  px_0: `padding-left: 0; padding-right: 0;`,
  pt_0: `padding-top: 0;`,
  pr_0: `padding-right: 0;`,
  pb_0: `padding-bottom: 0;`,
  pl_0: `padding-left: 0;`,
  p_1: `padding: 1rem;`,
  py_1: `padding-top: 1rem; padding-bottom: 1rem;`,
  px_1: `padding-left: 1rem; padding-right: 1rem;`,
  pt_1: `padding-top: 1rem;`,
  pr_1: `padding-right: 1rem;`,
  pb_1: `padding-bottom: 1rem;`,
  pl_1: `padding-left: 1rem;`,
  p_2: `padding: 2rem;`,
  py_2: `padding-top: 2rem; padding-bottom: 2rem;`,
  px_2: `padding-left: 2rem; padding-right: 2rem;`,
  pt_2: `padding-top: 2rem;`,
  pr_2: `padding-right: 2rem;`,
  pb_2: `padding-bottom: 2rem;`,
  pl_2: `padding-left: 2rem;`,
  p_3: `padding: 3rem;`,
  py_3: `padding-top: 3rem; padding-bottom: 3rem;`,
  px_3: `padding-left: 3rem; padding-right: 3rem;`,
  pt_3: `padding-top: 3rem;`,
  pr_3: `padding-right: 3rem;`,
  pb_3: `padding-bottom: 3rem;`,
  pl_3: `padding-left: 3rem;`,
  r_0: `border-radius: 0rem;`,
  rtl_0: `border-top-left-radius: 0rem;`,
  rt_0: `border-top-left-radius: 0rem; border-top-right-radius: 0rem;`,
  rtr_0: `border-top-right-radius: 0rem;`,
  rr_0: `border-top-right-radius:  0rem; border-bottom-right-radius: 0rem;`,
  rbr_0: `border-bottom-right-radius: 0rem;`,
  rb_0: `border-bottom-left-radius: 0rem; border-bottom-right-radius: 0rem;`,
  rbl_0: `border-bottom-left-radius: 0rem;`,
  rl_0: `border-top-left-radius: 0rem; border-bottom-left-radius: 0rem;`,
  r_1: `border-radius: 1rem;`,
  rtl_1: `border-top-left-radius: 1rem;`,
  rt_1: `border-top-left-radius: 1rem; border-top-right-radius: 1rem;`,
  rtr_1: `border-top-right-radius: 1rem;`,
  rr_1: `border-top-right-radius:  1rem; border-bottom-right-radius: 1rem;`,
  rbr_1: `border-bottom-right-radius: 1rem;`,
  rb_1: `border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem;`,
  rbl_1: `border-bottom-left-radius: 1rem;`,
  rl_1: `border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;`,
  r_2: `border-radius: 2rem;`,
  rtl_2: `border-top-left-radius: 2rem;`,
  rt_2: `border-top-left-radius: 2rem; border-top-right-radius: 2rem;`,
  rtr_2: `border-top-right-radius: 2rem;`,
  rr_2: `border-top-right-radius:  2rem; border-bottom-right-radius: 2rem;`,
  rbr_2: `border-bottom-right-radius: 2rem;`,
  rb_2: `border-bottom-left-radius: 2rem; border-bottom-right-radius: 2rem;`,
  rbl_2: `border-bottom-left-radius: 2rem;`,
  rl_2: `border-top-left-radius: 2rem; border-bottom-left-radius: 2rem;`,
  r_3: `border-radius: 3rem;`,
  rtl_3: `border-top-left-radius: 3rem;`,
  rt_3: `border-top-left-radius: 3rem; border-top-right-radius: 3rem;`,
  rtr_3: `border-top-right-radius: 3rem;`,
  rr_3: `border-top-right-radius:  3rem; border-bottom-right-radius: 3rem;`,
  rbr_3: `border-bottom-right-radius: 3rem;`,
  rb_3: `border-bottom-left-radius: 3rem; border-bottom-right-radius: 3rem;`,
  rbl_3: `border-bottom-left-radius: 3rem;`,
  rl_3: `border-top-left-radius: 3rem; border-bottom-left-radius: 3rem;`,
  before_show: `
  &::before {
    content: "";
  }
`,
  after_show: `
  &::after {
    content: "";
  }
`,
  before_hide: `
  &::before {
    content: none;
  }
`,
  after_hide: `
  &::after {
    content: none;
  }
`,
};
