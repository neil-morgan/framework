import { Section, Container, Row, Col, Pod, Heading, Text } from "..";

export default function PastRaces() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Heading.H1>Past races</Heading.H1>
        </Col>
        <Col xs>
          <Pod>
            <Heading.H2>League | Track | Position</Heading.H2>
            <Text.P>
              Sunt consectetur irure{" "}
              <Text.Strong>cillum reprehenderit</Text.Strong> duis.{" "}
              <Text.Small>This is small text</Text.Small> pariatur ut esse
              consequat qui. Amet duis deserunt id ullamco officia fugiat mollit
              culpa pariatur amet et deserunt. Pariatur{" "}
              <Text.A href="#">ipsum proident</Text.A> minim proident nostrud
              pariatur proident sint adipisicing. Excepteur elit non Lorem eu
              irure enim excepteur. Irure eiusmod proident reprehenderit
              cupidatat id aute do eu enim pariatur. Quis tempor elit cillum
              anim dolore.
            </Text.P>
            <Text.P>
              Ipsum consectetur laboris labore voluptate. Sint tempor enim
              laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis ex
              enim nostrud elit aliquip veniam do veniam. Et esse fugiat officia
              veniam et. Eu incididunt minim aliquip adipisicing consequat velit
              nulla aute sint consequat officia nulla. Voluptate deserunt mollit
              deserunt excepteur ad elit laboris cillum. Dolore reprehenderit ex
              laboris anim tempor fugiat duis sint officia irure sit quis.
            </Text.P>
          </Pod>
        </Col>
        <Row>
          <Col xs={12} sm={6}>
            <Pod>
              <Text.P>
                Ipsum consectetur laboris labore voluptate. Sint tempor enim
                laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis ex
                enim nostrud elit aliquip veniam do veniam. Et esse fugiat
                officia veniam et. Eu incididunt minim aliquip adipisicing
                consequat velit nulla aute sint consequat officia nulla.
                Voluptate deserunt mollit deserunt excepteur ad elit laboris
                cillum. Dolore reprehenderit ex laboris anim tempor fugiat duis
                sint officia irure sit quis.
              </Text.P>
            </Pod>
          </Col>
          <Col xs={12} sm={6}>
            <Pod>
              <Text.P>
                Ipsum consectetur laboris labore voluptate. Sint tempor enim
                laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis ex
                enim nostrud elit aliquip veniam do veniam. Et esse fugiat
                officia veniam et. Eu incididunt minim aliquip adipisicing
                consequat velit nulla aute sint consequat officia nulla.
                Voluptate deserunt mollit deserunt excepteur ad elit laboris
                cillum. Dolore reprehenderit ex laboris anim tempor fugiat duis
                sint officia irure sit quis.
              </Text.P>
            </Pod>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
