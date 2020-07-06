import { Section, Container, Row, Col, Pod, Heading, List, Text } from "..";
import Divider from "../components/Divider";

export default function News() {
  return (
    <>
      <Section>
        <Container>
          <Col xs>
            <Heading.H1>News</Heading.H1>
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
              Eiusmod aute mollit aliquip id fugiat nisi excepteur qui. In
              exercitation et ea nisi. Adipisicing laborum ut quis anim ipsum et
              commodo occaecat labore in sit. Magna non qui nisi laboris laborum
              ut sunt mollit ad tempor ad. Ullamco mollit aliqua dolore in. Enim
              nisi incididunt nisi nostrud.
            </Text.P>
            <List.Group>
              <List.Item>asdasd</List.Item>
              <List.Item>asdasd</List.Item>
              <List.Group as="ol">
                <List.Item>asdasd</List.Item>
                <List.Item>asdasd</List.Item>
                <List.Group>
                  <List.Item>asdasd</List.Item>
                  <List.Item>asdasd</List.Item>
                </List.Group>
              </List.Group>
            </List.Group>
          </Col>
        </Container>
      </Section>
      <Divider w_50 />
      <Section>
        <Container>
          <Row>
            <Col xs sm={12} md={4}>
              <Pod>
                <Heading.H2>News 1</Heading.H2>
                <Text.P>
                  Ipsum consectetur laboris labore voluptate. Sint tempor enim
                  laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis
                  ex enim nostrud elit aliquip veniam do veniam.
                </Text.P>
              </Pod>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Pod>
                <Heading.H2>News 2</Heading.H2>
                <Text.P>
                  Ipsum consectetur laboris labore voluptate. Sint tempor enim
                  laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis
                  ex enim nostrud elit aliquip veniam do veniam. E
                </Text.P>
              </Pod>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Pod>
                <Heading.H2>News 3</Heading.H2>
                <Text.P>
                  Ipsum consectetur laboris labore voluptate. Sint tempor enim
                  laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis
                  ex enim nostrud elit aliquip veniam do veniam. Et esse fugiat
                  officia veniam et.
                </Text.P>
              </Pod>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}
