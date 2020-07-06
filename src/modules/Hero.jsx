import styled from "styled-components";
import { Section, Container, Row, Col, Heading, Text, Button } from "../";
import utilities from "../utilities";

const { brightness } = utilities;

export default function Hero() {
  return (
    <HeroElement>
      <Container>
        <Col xs={10} sm={8} md={6}>
          <Text.P mb0="xs">Welcome to the</Text.P>
          <Heading.H1>Allied Racing League</Heading.H1>
          <Text.P>
            Laboris consequat pariatur consequat qui commodo anim nisi velit.
            Amet ut ut duis excepteur id veniam molli. Laboris consequat
            pariatur consequat qui commodo anim nisi velit. Amet ut ut duis
            excepteur id veniam molli.
          </Text.P>
          <Row>
            <Button link="/auth" left="xs" mr1="xs">
              Sign in
            </Button>
            <Button link="/auth" left="xs" mr1="xs" alt>
              Sign Up
            </Button>
          </Row>
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
