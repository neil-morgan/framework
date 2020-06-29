import styled from "styled-components";
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

import Config from "../config";
const { breakpoints } = Config();

export default function NextRace() {
  return (
    <Section invert>
      <Container>
        <Col xs>
          <Heading.H1>Next Race</Heading.H1>
        </Col>
        <Col xs>
          <Row>
            <Col xs={12} md={7} nospace>
              <Track>
                <TrackImage src="/images/track.png" alt="Logo" />
              </Track>
              <RaceImage src="/images/placeholder.jpg" alt="Logo" />
            </Col>
            <Col xs={12} md={5} nospace>
              <RaceDetails>
                <Heading.H2>Australian GP</Heading.H2>
                <Paragraph>In 2 days.</Paragraph>
                <Heading.H2 mb0={"xs"}>A button here</Heading.H2>
              </RaceDetails>
            </Col>
          </Row>
        </Col>
      </Container>
    </Section>
  );
}

const Track = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 12rem;
  width: 12rem;
  background: linear-gradient(to top, #fff, transparent 75%);
  @media only screen and (max-width: ${breakpoints.md}rem) {
    height: 10rem;
    width: 10rem;
  }
`;

const TrackImage = styled.img`
  width: 100%;
  max-width: 10rem;
  @media only screen and (max-width: ${breakpoints.md}rem) {
    max-width: 8rem;
  }
`;

const RaceImage = styled.img`
  flex: 0 0 auto; /* IE */
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  @media only screen and (max-width: ${breakpoints.md}rem) {
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0;
  }
`;

const RaceDetails = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 3rem;
  background: ${({ theme }) => theme.foreground};
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  @media only screen and (max-width: ${breakpoints.md}rem) {
    padding: 2rem;
    border-top-right-radius: 0;
    border-bottom-left-radius: 1rem;
  }
`;
