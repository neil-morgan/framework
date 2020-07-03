import styled from "styled-components";

const Divider = styled.hr`
  border: none;
  height: 0.2rem;
  width: 100%;
  margin: 1.5rem auto;
  background: ${({ theme }) => theme.foreground};

  ${(props) =>
    props.width &&
    `
      width: ${props.width}%;
    `}
`;

export default Divider;
