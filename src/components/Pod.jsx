import styled from "styled-components";
import Config from "../config";
const { breakpoints } = Config();

const Pod = styled.div`
  padding: 3rem;
  margin: 1rem 0;
  border-radius: 1rem;
  background: ${({ theme }) => theme.foreground};
  @media only screen and (max-width: ${breakpoints.sm}rem) {
    padding: 2rem;
  }
`;

export default Pod;
