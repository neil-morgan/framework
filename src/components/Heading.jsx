import styled from "styled-components";
import { fluidRange } from "polished";
import Config from "../config";

const Root = styled.h1`
  font-family: "Roboto";
  font-weight: 400;
  transition: all 500ms;
  color: ${({ theme }) => theme.text};

  ${(props) => props && Config().preset(props)}
`;

const H1 = styled(Root)`
  margin: 0 0 0.5em 0;
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

const H2 = styled(Root).attrs({
  as: "h2",
})`
  margin: 0 0 1em 0;
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
