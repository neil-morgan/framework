import styled from "styled-components";
import Config from "../config";
const { breakpoints } = Config();

const Pod = styled.div`
  flex: 1 1 auto;
  padding: 3rem;
  margin: 1rem 0;
  background: ${({ theme }) => theme.foreground};
  border-radius: 1rem;

  ${(props) =>
    props.rtl &&
    Config(props).media[props.rtl]`
    border-radius: 1rem 0 0 0;
    `}

  ${(props) =>
    props.rt &&
    Config(props).media[props.rt]`
    border-radius: 1rem 1rem 0 0;
    `}

  ${(props) =>
    props.rtr &&
    Config(props).media[props.rtr]`
    border-radius: 0 1rem 0 0;
    `}

  ${(props) =>
    props.rr &&
    Config(props).media[props.rr]`
    border-radius: 0 1rem 1rem 0;
    `}

  ${(props) =>
    props.rbr &&
    Config(props).media[props.rbr]`
    border-radius: 0 0 1rem 0;
    `}

  ${(props) =>
    props.rb &&
    Config(props).media[props.rb]`
    border-radius: 0 0 1rem 1rem;
    `}

  ${(props) =>
    props.rbl &&
    Config(props).media[props.rbl]`
    border-radius: 0 0 0 1rem;
    `}

  ${(props) =>
    props.rl &&
    Config(props).media[props.rl]`
    border-radius: 0 0 1rem 1rem;
    `}  

  @media only screen and (max-width: ${breakpoints.sm}rem) {
    padding: 2rem;
  }
`;

export default Pod;
