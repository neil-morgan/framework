import styled from "styled-components";
import { fluidRange } from "polished";
import Config from "../config";

const { palette } = Config();

const Root = styled.p`
  font-family: "Nunito";
  font-weight: 400;
  margin: 0 0 1em 0;
  color: ${({ theme }) => theme.text};
  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => props && Config().preset(props)}
`;

const P = styled(Root)`
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "16px",
      toSize: "18px",
    },
    "320px",
    "1200px"
  )}
`;

const A = styled(Root).attrs({
  as: "a",
})`
  margin: 0;
  font-weight: 600;
  color: ${palette.primary};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const Small = styled(Root).attrs({
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

const Strong = styled(Root).attrs({
  as: "strong",
})`
  margin: 0;
  font-weight: 900;
  &:hover {
    text-decoration: none;
  }
`;

const Text = {
  P,
  A,
  Strong,
  Small,
};

export default Text;
