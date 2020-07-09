import styled, { css } from "styled-components";
import { fluidRange } from "polished";
import Config from "../config";

const Root = () => css`
  font-family: "Nunito";
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  ${(props) => props && Config().preset(props)}
`;

const List = () => css`
  ${Root}
  margin: 0 0 2rem 2rem;
  & ol,
  & ul {
    margin: 0 0 0 2rem;
  }
`;

const LI = styled.li`
  ${Root}
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "16px",
      toSize: "18px",
    },
    "320px",
    "1200px"
  )}
  color: ${({ theme }) => theme.text};
  margin: 0 0 0.5em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Export = {
  List,
  LI,
};

export default Export;
