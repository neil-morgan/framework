import styled from "styled-components";
import PropTypes from "prop-types";
import { fluidRange } from "polished";
import Config from "../config";

const { dimensions, palette } = Config();

const ModificatorType = PropTypes.oneOf(dimensions);

const Root = styled.p`
  font-family: "Nunito";
  font-weight: 400;
  transition: all 500ms;
  margin: 0 0 1em 0;
  color: ${({ theme }) => theme.text};
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
    Config(props).media[props.left]`
    text-align: left;
  `}

  ${(props) =>
    props.center &&
    Config(props).media[props.center]`
    text-align: center;
  `}

  ${(props) =>
    props.right &&
    Config(props).media[props.right]`
    text-align: right;
  `}

  ${(props) =>
    props.my0 &&
    Config(props).media[props.my0]`
    margin-top: 0;
    margin-bottom: 0;
  `}

  ${(props) =>
    props.my1 &&
    Config(props).media[props.my1]`
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  `}

  ${(props) =>
    props.my2 &&
    Config(props).media[props.my2]`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  `}

  ${(props) =>
    props.mt0 &&
    Config(props).media[props.mt0]`
    margin-top: 0;
  `}

  ${(props) =>
    props.mt1 &&
    Config(props).media[props.mt1]`
    margin-top: 0.25em;
  `}

  ${(props) =>
    props.mt2 &&
    Config(props).media[props.mt2]`
    margin-top: 0.5em;
  `}

  ${(props) =>
    props.mb0 &&
    Config(props).media[props.mb0]`
    margin-bottom: 0;
  `}

  ${(props) =>
    props.mb1 &&
    Config(props).media[props.mb1]`
    margin-bottom: 0.25em;
  `}

  ${(props) =>
    props.mb2 &&
    Config(props).media[props.mb2]`
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
  margin: 0;
  font-weight: 900;
  &:hover {
    text-decoration: none;
  }
`;

export const Link = styled(Root).attrs({
  as: "a",
})`
  margin: 0;
  font-weight: 600;
  color: ${palette.primary};
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
