import styled from "styled-components";
import { Section, Container, Row, Col, Heading, Paragraph, Small } from "../";
import utilities from "../utilities";

const { brightness } = utilities;

export default function Footer() {
  return (
    <FooterElement>
      <Container>
        <Col xs>
          <Heading.H2>Footer</Heading.H2>
          <Paragraph>
            Laboris consequat pariatur consequat qui commodo anim nisi velit.
            Amet ut ut duis excepteur id veniam mollit officia do. Do ut in
            tempor ad deserunt sint in exercitation est. Quis ex ad mollit
            dolore laboris adipisicing ea culpa. Duis non eu Lorem officia.
          </Paragraph>
        </Col>
      </Container>
    </FooterElement>
  );
}

const FooterElement = styled(Section)`
  background: ${({ theme }) => brightness(theme.primary, -15)};
`;
