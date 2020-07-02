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
            <Paragraph>
              Sunt consectetur irure <Bold>cillum reprehenderit</Bold> duis.{" "}
              <Small>This is small text</Small> pariatur ut esse consequat qui.
              Amet duis deserunt id ullamco officia fugiat mollit culpa pariatur
              amet et deserunt. Pariatur <Link href="#">ipsum proident</Link>{" "}
              minim proident nostrud pariatur proident sint adipisicing.
              Excepteur elit non Lorem eu irure enim excepteur. Irure eiusmod
              proident reprehenderit cupidatat id aute do eu enim pariatur. Quis
              tempor elit cillum anim dolore.
            </Paragraph>
            <Paragraph>
              Ipsum consectetur laboris labore voluptate. Sint tempor enim
              laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis ex
              enim nostrud elit aliquip veniam do veniam. Et esse fugiat officia
              veniam et. Eu incididunt minim aliquip adipisicing consequat velit
              nulla aute sint consequat officia nulla. Voluptate deserunt mollit
              deserunt excepteur ad elit laboris cillum. Dolore reprehenderit ex
              laboris anim tempor fugiat duis sint officia irure sit quis.
            </Paragraph>
          </Pod>
        </Col>
      </Container>
    </Section>
  );
}
