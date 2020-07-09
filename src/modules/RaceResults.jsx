import { Section, Container, Col, Pod, Text } from "..";

const { Title, Heading, Paragraph } = Text;

export default function Results() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Title>Results</Title>
        </Col>
        <Col xs>
          <Heading>Results data</Heading>
          <Paragraph>Bar charts and comparisons and stuff</Paragraph>
        </Col>
      </Container>
    </Section>
  );
}
