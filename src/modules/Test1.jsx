import {
  Section,
  Container,
  Row,
  Col,
  Pod,
  Heading,
  Paragraph,
  Small,
  Link,
  Bold,
} from "..";
import styled from "styled-components";
import config from "../config";

const { palette } = config();

export default function Test1() {
  return (
    <Section invert>
      <Container>
        <Col xs>
          <Heading.H1>Recent races</Heading.H1>
        </Col>
        <Col xs>
          <Pod>
            <Heading.H2>Australian GP</Heading.H2>
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
              Eiusmod aute mollit aliquip id fugiat nisi excepteur qui. In
              exercitation et ea nisi. Adipisicing laborum ut quis anim ipsum et
              commodo occaecat labore in sit. Magna non qui nisi laboris laborum
              ut sunt mollit ad tempor ad. Ullamco mollit aliqua dolore in. Enim
              nisi incididunt nisi nostrud.
            </Paragraph>
          </Pod>
        </Col>
      </Container>
    </Section>
  );
}
