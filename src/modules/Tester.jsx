import { Section, Container, Row, Col, Heading, Paragraph, Small } from "../";

export default function Tester() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Heading.H1>Heading 1</Heading.H1>
          <Heading.H2>Heading 2</Heading.H2>
          <Paragraph>
            Sunt consectetur irure <strong>cillum reprehenderit</strong> duis.{" "}
            <Small>This is small text</Small> pariatur ut esse consequat qui.
            Amet duis deserunt id ullamco officia fugiat mollit culpa pariatur
            amet et deserunt. Pariatur <a href="#">ipsum proident</a> minim
            proident nostrud pariatur proident sint adipisicing. Excepteur elit
            non Lorem eu irure enim excepteur. Irure eiusmod proident
            reprehenderit cupidatat id aute do eu enim pariatur. Quis tempor
            elit cillum anim dolore.
          </Paragraph>
          <Paragraph>
            Ipsum consectetur laboris labore voluptate. Sint tempor enim laboris
            aliquip. Elit ullamco culpa ad amet. Adipisicing quis ex enim
            nostrud elit aliquip veniam do veniam. Et esse fugiat officia veniam
            et. Eu incididunt minim aliquip adipisicing consequat velit nulla
            aute sint consequat officia nulla. Voluptate deserunt mollit
            deserunt excepteur ad elit laboris cillum. Dolore reprehenderit ex
            laboris anim tempor fugiat duis sint officia irure sit quis.
          </Paragraph>
        </Col>
        <Row>
          <Col xs={12} sm={6}>
            <Paragraph>
              Ipsum consectetur laboris labore voluptate. Sint tempor enim
              laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis ex
              enim nostrud elit aliquip veniam do veniam. Et esse fugiat officia
              veniam et. Eu incididunt minim aliquip adipisicing consequat velit
              nulla aute sint consequat officia nulla. Voluptate deserunt mollit
              deserunt excepteur ad elit laboris cillum. Dolore reprehenderit ex
              laboris anim tempor fugiat duis sint officia irure sit quis.
            </Paragraph>
          </Col>
          <Col xs={12} sm={6}>
            <Paragraph>
              Ipsum consectetur laboris labore voluptate. Sint tempor enim
              laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis ex
              enim nostrud elit aliquip veniam do veniam. Et esse fugiat officia
              veniam et. Eu incididunt minim aliquip adipisicing consequat velit
              nulla aute sint consequat officia nulla. Voluptate deserunt mollit
              deserunt excepteur ad elit laboris cillum. Dolore reprehenderit ex
              laboris anim tempor fugiat duis sint officia irure sit quis.
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
