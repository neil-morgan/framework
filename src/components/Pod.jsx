import styled, { css } from "styled-components";
import Config from "../config";

const { breakpoints } = Config();

const Root = () => css`
  ${(props) => props && Config().preset(props)}
`;

const Image = styled.img`
  ${Root}
  width: 100%;
  margin-top: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const Body = styled.div`
  ${Root}
  flex: 1 1 auto;
  padding: 3rem 3rem 1.5rem;
  margin-bottom: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: ${({ theme }) => theme.foreground};

  @media only screen and (max-width: ${breakpoints.sm}rem) {
    padding: 2rem;
  }
`;

const Pod = {
  Image,
  Body,
};

export default Pod;
