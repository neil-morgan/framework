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

export default function DriverStats() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Heading.H1>Driver statistics</Heading.H1>
        </Col>
        <Col xs>
          <Pod>
            <Heading.H2>Stats data</Heading.H2>
            <Paragraph>
              <Paragraph>Bar charts and comparisons and stuff</Paragraph>
            </Paragraph>
          </Pod>
        </Col>
      </Container>
    </Section>
  );
}
