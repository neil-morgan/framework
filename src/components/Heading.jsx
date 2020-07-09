import styled, { css } from "styled-components";
import { fluidRange } from "polished";
import Config from "../config";

const Root = () => css`
  font-family: "Roboto";
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  ${(props) => props && Config().preset(props)}
`;

const H1 = styled.h1`
  ${Root}
  margin-bottom:0.5em;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "36px",
      toSize: "42px",
    },
    "320px",
    "1200px"
  )}
`;

const H2 = styled.h2`
  ${Root}
  margin-bottom: 1em;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "24px",
      toSize: "30px",
    },
    "320px",
    "1200px"
  )}
`;

const Heading = {
  H1,
  H2,
};

export default Heading;
