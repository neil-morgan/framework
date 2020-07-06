import styled from "styled-components";
import Config from "../config";

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  ${(props) => props && Config().preset(props)}
`;

Row.displayName = "Row";

export default Row;
