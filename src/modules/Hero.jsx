import {
  Section,
  Container,
  Row,
  Col,
  Heading,
  Paragraph,
  Small,
  Link,
  Bold,
} from "../";
import styled from "styled-components";
import config from "../config";

const { palette } = config();

export default function Tester() {
  return (
    <Hero>
      <Container>
        <Col xs>
          <Heading.H1 dark>On light</Heading.H1>
          <Heading.H2 dark>Sub heading</Heading.H2>
          <Paragraph dark>
            Sunt consectetur irure <Bold dark>cillum reprehenderit</Bold> duis.{" "}
            <Small dark>This is small text</Small> pariatur ut esse consequat
            qui. Amet duis deserunt id ullamco officia fugiat mollit culpa
            pariatur amet et deserunt. Pariatur{" "}
            <Link href="#">ipsum proident</Link> minim proident nostrud pariatur
            proident sint adipisicing. Excepteur elit non Lorem eu irure enim
            excepteur. Irure eiusmod proident reprehenderit cupidatat id aute do
            eu enim pariatur. Quis tempor elit cillum anim dolore.
          </Paragraph>
          <Paragraph dark>
            Eiusmod aute mollit aliquip id fugiat nisi excepteur qui. In
            exercitation et ea nisi. Adipisicing laborum ut quis anim ipsum et
            commodo occaecat labore in sit. Magna non qui nisi laboris laborum
            ut sunt mollit ad tempor ad. Ullamco mollit aliqua dolore in. Enim
            nisi incididunt nisi nostrud.
          </Paragraph>
        </Col>
      </Container>
    </Hero>
  );
}

const Hero = styled(Section)`
  background: ${palette.light.background};
`;
