import styled from "styled-components";
import { Section, Container, Col, Text } from "../";
import utilities from "../utilities";

const { Title, Paragraph } = Text;
const { brightness } = utilities;

export default function Hero() {
  return (
    <HeroElement>
      <Container>
        <Col xs={10} sm={8} md={6}>
          <Paragraph mb0="xs">Welcome to the</Paragraph>
          <Title>Allied Racing League</Title>
          <Paragraph>
            Elit dolor sit fugiat consequat ea sint occaecat. Adipisicing labore
            velit excepteur aute sint et eu tempor quis. Eiusmod enim nisi
            laboris voluptate sit aliquip ut ad reprehenderit do. Consequat
            irure adipisicing ut nostrud nulla nostrud enim dolore culpa velit.
            Nostrud enim incididunt aliqua do cillum veniam mollit cupidatat
            laborum aute labore. Ea incididunt incididunt dolor eiusmod veniam
            est minim aliquip non Lorem commodo velit.
          </Paragraph>
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
