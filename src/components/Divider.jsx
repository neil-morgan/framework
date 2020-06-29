import styled from "styled-components";

const Divider = styled.hr`
  border: none;
  height: 0.2rem;
  margin: 1.5rem 0;
  background: ${({ theme }) => theme.background};
`;

export default Divider;
