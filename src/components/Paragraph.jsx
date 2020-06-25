import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { fluidRange } from "polished";
import config from "../config";

const { dimensions, palette, colors } = config();

const ModificatorType = PropTypes.oneOf(dimensions);

const Root = styled.p`
  font-family: "Nunito";
  font-weight: 400;
  color: ${palette.light.paragraph};
  margin: 0 0 0.5em 0;

  ${(props) =>
    props.dark &&
    `
    color: ${palette.dark.paragraph};
  `}
`;

const Paragraph = styled(Root)`
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "16px",
      toSize: "18px",
    },
    "320px",
    "1200px"
  )}

  ${(props) =>
    props.left &&
    config(props).media[props.left]`
    text-align: left;
  `}

  ${(props) =>
    props.center &&
    config(props).media[props.center]`
    text-align: center;
  `}

  ${(props) =>
    props.right &&
    config(props).media[props.right]`
    text-align: right;
  `}

  ${(props) =>
    props.my0 &&
    config(props).media[props.my0]`
    margin-top: 0;
    margin-bottom: 0;
  `}

  ${(props) =>
    props.my1 &&
    config(props).media[props.my1]`
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  `}

  ${(props) =>
    props.my2 &&
    config(props).media[props.my2]`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  `}

  ${(props) =>
    props.mt0 &&
    config(props).media[props.mt0]`
    margin-top: 0;
  `}

  ${(props) =>
    props.mt1 &&
    config(props).media[props.mt1]`
    margin-top: 0.25em;
  `}

  ${(props) =>
    props.mt2 &&
    config(props).media[props.mt2]`
    margin-top: 0.5em;
  `}

  ${(props) =>
    props.mb0 &&
    config(props).media[props.mb0]`
    margin-bottom: 0;
  `}

  ${(props) =>
    props.mb1 &&
    config(props).media[props.mb1]`
    margin-bottom: 0.25em;
  `}

  ${(props) =>
    props.mb2 &&
    config(props).media[props.mb2]`
    margin-bottom: 0.5em;
  `}
`;

export const Small = styled(Root).attrs({
  as: "small",
})`
  margin: 0;
  display: inline-flex;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "12px",
      toSize: "14px",
    },
    "320px",
    "1200px"
  )}
`;

export const Bold = styled(Root).attrs({
  as: "strong",
})`
  font-weight: 900;
  &:hover {
    text-decoration: none;
  }
`;

export const Link = styled(Root).attrs({
  as: "a",
})`
  font-weight: 600;
  color: ${colors.blue};
  &:hover {
    text-decoration: none;
  }
`;

Paragraph.displayName = "Paragraph";

Paragraph.propTypes = {
  left: ModificatorType,
  center: ModificatorType,
  right: ModificatorType,
};

export default Paragraph;
