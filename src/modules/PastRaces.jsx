import { Section, Container, Row, Col, Pod, Text } from "..";
const { Title, Paragraph, Strong, Small, Link } = Text;

export default function PastRaces() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Title>Past races</Title>
        </Col>
        <Col xs>
          <Pod>
            <Heading>League | Track | Position</Heading>
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
        <Row>
          <Col xs={12} sm={6}>
            <Pod>
              <Paragraph>
                Sunt consectetur irure <Strong>cillum reprehenderit</Strong>{" "}
                duis. <Small>This is small text</Small> pariatur ut esse
                consequat qui. Amet duis deserunt id ullamco officia fugiat
                mollit culpa pariatur amet et deserunt. Pariatur{" "}
                <Link href="#">ipsum proident</Link> minim proident nostrud
                pariatur proident sint adipisicing. Excepteur elit non Lorem eu
                irure enim excepteur. Irure eiusmod proident reprehenderit
                cupidatat id aute do eu enim pariatur. Quis{" "}
                <Link href="#">ipsum proident</Link> tempor elit cillum anim
                dolore.
              </Paragraph>
            </Pod>
          </Col>
          <Col xs={12} sm={6}>
            <Pod>
              <Paragraph>
                Sunt consectetur irure <Strong>cillum reprehenderit</Strong>{" "}
                duis. <Small>This is small text</Small> pariatur ut esse
                consequat qui. Amet duis deserunt id ullamco officia fugiat
                mollit culpa pariatur amet et deserunt. Pariatur{" "}
                <Link href="#">ipsum proident</Link> minim proident nostrud
                pariatur proident sint adipisicing. Excepteur elit non Lorem eu
                irure enim excepteur. Irure eiusmod proident reprehenderit
                cupidatat id aute do eu enim pariatur. Quis{" "}
                <Link href="#">ipsum proident</Link> tempor elit cillum anim
                dolore.
              </Paragraph>
            </Pod>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
