import { Section, Container, Col, Pod, Heading, Text } from "..";

const { Title, Paragraph, Strong, Small, Link } = Text;

export default function RecentRaces() {
  return (
    <Section invert>
      <Container>
        <Col xs>
          <Title>Recent races</Title>
        </Col>
        <Col xs>
          <Pod>
            <Heading.H2>Australian GP</Heading.H2>
            <Paragraph>
              Sunt consectetur irure <Strong>cillum reprehenderit</Strong> duis.{" "}
              <Small>This is small text</Small> pariatur ut esse consequat qui.
              Amet duis deserunt id ullamco officia fugiat mollit culpa pariatur
              amet et deserunt. Pariatur <Link href="#">ipsum proident</Link>{" "}
              minim proident nostrud pariatur proident sint adipisicing.
              Excepteur elit non Lorem eu irure enim excepteur. Irure eiusmod
              proident reprehenderit cupidatat id aute do eu enim pariatur. Quis{" "}
              <Link href="#">ipsum proident</Link> tempor elit cillum anim
              dolore.
            </Paragraph>
          </Pod>
        </Col>
      </Container>
    </Section>
  );
}
