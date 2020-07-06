import styled from "styled-components";
import { fluidRange } from "polished";
import Config from "../config";

const Root = styled.ul`
  font-family: "Nunito";
  font-weight: 400;
  color: black;

  ${(props) => props && Config().preset(props)}
`;

const Group = styled(Root)`
  &,
  & ol,
  & ul {
    margin: 0 0 0 2rem;
  }
`;

const Item = styled(Root).attrs({
  as: "li",
})`
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

const List = {
  Group,
  Item,
};

export default List;
