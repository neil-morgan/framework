import styled, { css } from "styled-components";
import { fluidRange } from "polished";
import Config from "../config";

const { palette } = Config();

const fluidMin = "320px";
const fluidMax = "1200px";

const Root = () => css`
  font-family: "Nunito";
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  ${(props) => props && Config().preset(props)}
`;

const Title = styled.h1`
  ${Root}
  font-family: "Roboto";
  margin-bottom: 0.5em;
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

const Heading = styled.h2`
  ${Root}
  font-family: "Roboto";
  margin-bottom: 1em;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "24px",
      toSize: "30px",
    },
    fluidMin,
    fluidMax
  )}
`;

const Paragraph = styled.p`
  ${Root}
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "16px",
      toSize: "18px",
    },
    fluidMin,
    fluidMax
  )}
  margin-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  ${Root}
  font-weight: 600;
  color: ${palette.primary};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const Small = styled.small`
  ${Root}
  display: inline-flex;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "12px",
      toSize: "14px",
    },
    fluidMin,
    fluidMax
  )}
`;

const Strong = styled.strong`
  ${Root}
  font-weight: 900;
`;

const List = styled.ul`
  ${Root}
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "16px",
      toSize: "18px",
    },
    fluidMin,
    fluidMax
  )}
  margin-left: 2rem;
  margin-bottom: 1em;
  & ol,
  & ul {
    margin-bottom: 0;
  }
`;

const Item = styled.li`
  ${Root}
  color: ${({ theme }) => theme.text};
  margin: 0 0 0.5em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Text = {
  Title,
  Heading,
  Paragraph,
  Link,
  Strong,
  Small,
  List,
  Item,
};

export default Text;
