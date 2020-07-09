import { Section, Container, Row, Col, Pod, Text } from "..";

const { Title, Paragraph, Strong, Small, Link, List, Item } = Text;

export default function News() {
  return (
    <>
      <Section>
        <Container>
          <Col xs>
            <Title>News</Title>
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
            <Paragraph>
              Eiusmod aute mollit aliquip id fugiat nisi excepteur qui. In
              exercitation et ea nisi. Adipisicing laborum ut quis anim ipsum et
              commodo occaecat labore in sit. Magna non qui nisi laboris laborum
              ut sunt mollit ad tempor ad. Ullamco mollit aliqua dolore in. Enim
              nisi incididunt nisi nostrud.
            </Paragraph>
            <List>
              <Item>asdasd</Item>
              <Item>asdasd</Item>
              <List as="ol">
                <Item>asdasd</Item>
                <Item>asdasd</Item>
                <List>
                  <Item>asdasd</Item>
                  <Item>asdasd</Item>
                </List>
              </List>
            </List>
          </Col>
          <Row mb_2>
            <Col xs sm={12} md={4}>
              <Pod content={tempData.pod1} />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Pod content={tempData.pod2} />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Pod content={tempData.pod3} />
            </Col>
          </Row>
          <Col xs>
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
          </Col>
        </Container>
      </Section>
    </>
  );
}

const tempData = {
  pod1: {
    image: "placeholder.jpg",
    heading: "Heading 1",
    text:
      "Est minim laboris eu eu irure. Incididunt fugiat exercitation do est minim laboris eu eu irure. Fugiat exercitation do est minim laboris eu eu irure.",
    button: { text: "Text", url: "/" },
  },
  pod2: {
    image: "placeholder.jpg",
    heading: "Heading 2",
    text:
      "Incididunt fugiat exercitation do est minim laboris eu eu irure. Fugiat exercitation do est minim laboris eu eu irure.",
    button: { text: "Text", url: "/" },
  },
  pod3: {
    image: "placeholder.jpg",
    heading: "Heading 3",
    text:
      "Incididunt fugiat exercitation do est minim laboris eu eu irure. Fugiat exercitation do est minim laboris eu eu irure.",
    button: { text: "Text", url: "/" },
  },
};
