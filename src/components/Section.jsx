import styled from "styled-components";
import Config from "../config";

const Section = styled.section`
  &::after,
  &::before {
    content: "";
    display: block;
    height: 7rem;
  }

  ${(props) => props && Config().preset(props)}
`;

export default Section;
