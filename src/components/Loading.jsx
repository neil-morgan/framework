import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
}

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Spinner = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  display: inline-block;
  border: 0.4rem solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${Spin} 1200ms 500ms linear infinite;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: rgba(000, 000, 000, 0.66);
  opacity: 0;
  animation: ${Fade} 500ms 500ms ease-out forwards;
`;
