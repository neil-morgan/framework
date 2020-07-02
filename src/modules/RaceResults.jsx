import {
  Section,
  Container,
  Row,
  Col,
  Pod,
  Heading,
  Paragraph,
  Small,
  Bold,
  Link,
} from "..";

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
            <Paragraph>Bar charts and comparisons and stuff</Paragraph>
          </Pod>
        </Col>
      </Container>
    </Section>
  );
}
