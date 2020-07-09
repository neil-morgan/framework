import styled, { css } from "styled-components";
import { Button, Text } from "..";
import Config from "../config";

const { breakpoints } = Config();

export default function Pod({ content }) {
  const { Heading, Paragraph } = Text;
  const { image, heading, text, button } = content;
  return (
    <>
      <Image src={`/images/${image}`} alt="my image" />
      <Body>
        <Heading>{heading}</Heading>
        <Paragraph>{text}</Paragraph>
        <Button mt_auto link={button.url}>
          {button.text}
        </Button>
      </Body>
    </>
  );
}

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
  display:flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 3rem;
  margin-bottom: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: ${({ theme }) => theme.foreground};

  @media only screen and (max-width: ${breakpoints.sm}rem) {
    padding: 2rem;
  }
`;
