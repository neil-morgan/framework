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
import config from "../config";
import Divider from "../components/Divider";

const { palette } = config();

export default function News() {
  return (
    <>
      <Section>
        <Container>
          <Col xs>
            <Heading.H1>News</Heading.H1>
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
          </Col>
        </Container>
      </Section>
      <Divider width="50" />
      <Section>
        <Container>
          <Row>
            <Col xs sm={12} md={4}>
              <Pod radiusTop="xs">
                <Heading.H2>News 1</Heading.H2>
                <Paragraph>
                  Ipsum consectetur laboris labore voluptate. Sint tempor enim
                  laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis
                  ex enim nostrud elit aliquip veniam do veniam.
                </Paragraph>
              </Pod>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Pod>
                <Heading.H2>News 2</Heading.H2>
                <Paragraph>
                  Ipsum consectetur laboris labore voluptate. Sint tempor enim
                  laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis
                  ex enim nostrud elit aliquip veniam do veniam. E
                </Paragraph>
              </Pod>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Pod>
                <Heading.H2>News 3</Heading.H2>
                <Paragraph>
                  Ipsum consectetur laboris labore voluptate. Sint tempor enim
                  laboris aliquip. Elit ullamco culpa ad amet. Adipisicing quis
                  ex enim nostrud elit aliquip veniam do veniam. Et esse fugiat
                  officia veniam et.
                </Paragraph>
              </Pod>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}
