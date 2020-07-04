import styled from "styled-components";
import Config from "../config";

const { breakpoints } = Config();

const Pod = styled.div`
  flex: 1 1 auto;
  padding: 3rem;
  margin: 1rem 0;
  background: ${({ theme }) => theme.foreground};
  border-radius: 1rem;

  ${(props) => props && Config().preset(props)}

  @media only screen and (max-width: ${breakpoints.sm}rem) {
    padding: 2rem;
  }
`;

export default Pod;
