import styled from "styled-components";

export default function Logo() {
  return (
    <Graphic viewBox="0 0 44.3 25">
      <polygon points="38.8,25 38.8,10.9 31.8,15.7 19.3,7 19.3,0 31.8,8.5 44.3,0 44.3,25 	" />
      <polygon points="0,25 0,0 25,17.2 25,24.2 5.5,10.3 5.5,25 	" />
    </Graphic>
  );
}

export const Graphic = styled.svg`
  height: 100%;
  width: 100%;
  fill: ${({ theme }) => theme.primary};
`;
