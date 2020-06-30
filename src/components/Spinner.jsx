import styled, { keyframes } from "styled-components";
import utilities from "../utilities";

const { brightness, opacity } = utilities;

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 0.4rem solid
    ${({ theme }) => opacity(brightness(theme.primary, -10), 40)};
  border-left-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin: 1.5rem 1rem;
  animation: ${Spin} 1200ms linear infinite;
`;

export default Spinner;
