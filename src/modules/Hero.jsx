import { Section, Container, Row, Col, Heading, Paragraph, Small } from "../";
import styled from "styled-components";
import config from "../config";

const { colors } = config();

export default function Tester() {
  return (
    <Hero>
      <Container>
        <Col xs>
          <Heading.H1>Hero section</Heading.H1>
          <Heading.H2>Sub heading</Heading.H2>
        </Col>
      </Container>
    </Hero>
  );
}

const Hero = styled(Section)`
  background: ${colors.grey};
`;
