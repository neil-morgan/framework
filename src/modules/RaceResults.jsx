import { Section, Container, Col, Pod, Heading, Text } from "..";

export default function Results() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Heading.H1>Results</Heading.H1>
        </Col>
        <Col xs>
          <Pod>
            <Heading.H2>Results data</Heading.H2>
            <Text.P>Bar charts and comparisons and stuff</Text.P>
          </Pod>
        </Col>
      </Container>
    </Section>
  );
}
