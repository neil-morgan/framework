import styled from "styled-components";
import { Section, Container, Col, Heading, Paragraph, Button } from "../";
import utilities from "../utilities";

const { brightness, opacity } = utilities;

export default function Footer() {
  return (
    <HeroElement>
      <Container>
        <Col xs={6}>
          <Paragraph mb0="xs">Welcome to the</Paragraph>
          <Heading.H1>Allied Racing League</Heading.H1>
          <Paragraph>
            Laboris consequat pariatur consequat qui commodo anim nisi velit.
            Amet ut ut duis excepteur id veniam molli. Laboris consequat
            pariatur consequat qui commodo anim nisi velit. Amet ut ut duis
            excepteur id veniam molli.
          </Paragraph>

          <Button alt left="xs">
            See schedule
          </Button>
        </Col>
      </Container>
    </HeroElement>
  );
}

const HeroElement = styled(Section)`
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => brightness(theme.primary, 0)},
    ${({ theme }) => brightness(theme.primary, -20)}
  );
`;
