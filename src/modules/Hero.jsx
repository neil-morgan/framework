import styled from "styled-components";
import { Section, Container, Row, Col, Heading, Text, Button } from "../";
import utilities from "../utilities";

const { brightness } = utilities;

export default function Hero() {
  return (
    <HeroElement>
      <Container>
        <Col xs={10} sm={8} md={6}>
          <Text.Paragraph mb0="xs">Welcome to the</Text.Paragraph>
          <Heading.H1>Allied Racing League</Heading.H1>
          <Text.Paragraph>
            Elit dolor sit fugiat consequat ea sint occaecat. Adipisicing labore
            velit excepteur aute sint et eu tempor quis. Eiusmod enim nisi
            laboris voluptate sit aliquip ut ad reprehenderit do. Consequat
            irure adipisicing ut nostrud nulla nostrud enim dolore culpa velit.
            Nostrud enim incididunt aliqua do cillum veniam mollit cupidatat
            laborum aute labore. Ea incididunt incididunt dolor eiusmod veniam
            est minim aliquip non Lorem commodo velit.
          </Text.Paragraph>
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
