import {
  Section,
  Container,
  Col,
  Pod,
  Heading,
  Text,
  Small,
  Link,
  Bold,
} from "..";

export default function RecentRaces() {
  return (
    <Section invert>
      <Container>
        <Col xs>
          <Heading.H1>Recent races</Heading.H1>
        </Col>
        <Col xs>
          <Pod>
            <Heading.H2>Australian GP</Heading.H2>
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
          </Pod>
        </Col>
      </Container>
    </Section>
  );
}
