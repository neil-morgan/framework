import styled from "styled-components";
import utilities from "../utilities";
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
  Button,
} from "..";

import Config from "../config";

const { breakpoints } = Config();
const { brightness, opacity } = utilities;

const tempData = {
  title: "Australian GP",
  time: "2 days",
  description:
    "Duis tempor nostrud proident consectetur occaecat esse ea proident labore labore dolor officia ullamco sint. Est pariatur nostrud id occaecat esse incididunt irure sit laboris.In aute sunt ut irure esse.",
};

export default function NextRace() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Heading.H1>Next Race</Heading.H1>
        </Col>
        <Col xs>
          <Race>
            <Row between="xs">
              <Col xs={9} sm={8} md={6}>
                <Heading.H2 mb0="xs">{tempData.title}</Heading.H2>
                <Paragraph>
                  <StartDate>Starts in {tempData.time}</StartDate>
                </Paragraph>
                <Description />
              </Col>
              <Col xs={3} sm={4}>
                <Track />
              </Col>
            </Row>
            <Col xs>
              <Button alt left="sm" center="xs">
                More info
              </Button>
            </Col>
          </Race>
        </Col>
      </Container>
    </Section>
  );
}

const Description = () => <Paragraph>{tempData.description}</Paragraph>;

const Track = () => (
  <Graphic viewBox="0 0 300 253.6">
    <path
      d="M19.9,253.6c-4.1,0-8.2-1.5-11.7-4.5c-6.8-5.8-9.9-15.4-7.4-23.5c3.7-12,15.2-42.9,20.2-55.2
	c3.2-7.8,10.2-12.2,15.9-15.7c1.9-1.2,3.8-2.3,5.1-3.4c4.4-3.6,7.4-7.4,10.7-17c1.5-4.5,12.9-38.5,13-38.9
	c1.8-5.7,4.6-14.5,9.9-21.3c6.7-8.6,15.6-11.8,26.4-9.6c2.7,0.6,5.3,1.1,7.8,1.6c21.7,4.3,34.8,6.9,48.3,26.2
	c13,18.5,23.5,15.2,28,13.8c1.9-0.6,2.3-0.7,3.2-1c1.8-0.6,5.6-1.8,30.7-9.8c5.3-1.7,9.9-4.2,13.7-7.5c8.3-7.2,9.3-14.8,8.7-19.7
	l-55.7,17.4l-0.2,0c-5.6,1.1-16.1,0.6-19.8-8.6c-3.5-8.9,0.9-17.4,3.8-23.1c0.5-0.9,0.9-1.8,1.3-2.7c1.4-2.9,6.1-12.4,11-22.4
	c4.7-9.5,9.6-19.3,11.1-22.4c2.4-5,7.5-7.2,14-6c1.8,0.3,3.5,1,5.1,2l17.4,10.8c3,1.9,5.2,4.7,6.3,8.1l11.5,36.1l27.2-8.5
	c8-2.5,15.4-0.9,20.2,4.4c4.1,4.5,5.4,10.8,3.3,15.7c-1.7,4-3.8,9.2-5.5,13.5c-1.2,2.8-2.2,5.3-2.8,6.9c-1.8,4.2-5.2,11.1-7.9,16.1
	c-3,5.6-13,13-15,14.5l-0.3,0.2l-30.9,18.5C228.8,142.9,43.5,244,27.8,251.7C25.3,252.9,22.6,253.6,19.9,253.6z M95.8,72.3
	c-12.7,0-17.8,12.6-22,25.7c-0.1,0.4-11.5,34.5-13,39c-3.4,10-7.1,15.7-13.4,20.9c-1.7,1.4-3.8,2.7-5.9,4c-4.9,3-10.4,6.5-12.5,11.7
	c-4.9,12.2-16.4,43-19.9,54.5c-1.5,4.9,0.5,11,4.8,14.6c2.3,1.9,5.9,3.7,10.4,1.5l0,0c15.3-7.5,203.8-110.4,208.4-112.9l30.5-18.3
	c4.3-3.1,10.8-8.7,12.3-11.5c2.6-4.8,5.9-11.4,7.5-15.4c0.7-1.6,1.7-4,2.8-6.9c1.7-4.2,3.9-9.5,5.6-13.6c0.7-1.6,0.2-4.4-1.8-6.7
	c-2.6-2.8-6.6-3.5-11.4-2l-27.3,8.5c1.3,7.8-0.3,19.1-11.4,28.7c-4.7,4.1-10.3,7.1-16.7,9.2c-25.1,8-28.8,9.2-30.6,9.8
	c-0.9,0.3-1.3,0.4-3.2,1c-5.2,1.6-21,6.6-37.5-17c-11.6-16.6-22.1-18.7-43.1-22.8c-2.5-0.5-5.1-1-7.8-1.6
	C98.7,72.4,97.2,72.3,95.8,72.3z M204.6,8.4c-2.2,0-2.8,1.1-2.9,1.5c-1.5,3.2-6.4,13-11.1,22.6c-4.7,9.5-9.6,19.4-10.9,22.2
	c-0.4,0.9-0.9,1.9-1.5,2.9c-2.6,5.1-5.6,10.8-3.5,16.1c1.8,4.6,8.9,3.7,10.1,3.5l55.4-17.3l-11.5-36.1c-0.5-1.4-1.4-2.7-2.7-3.5
	L208.6,9.5c-0.7-0.5-1.5-0.8-2.2-0.9C205.7,8.5,205.1,8.4,204.6,8.4z"
    />
  </Graphic>
);

const Race = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  padding: 3rem;
  background: ${({ theme }) => theme.foreground};

  background: linear-gradient(
      to bottom right,
      ${({ theme }) => brightness(theme.primary, -20)},
      ${({ theme }) => opacity(brightness(theme.primary, -20), 50)}
    ),
    center / cover no-repeat url("images/placeholder.jpg");
  @media only screen and (max-width: ${breakpoints.sm}rem) {
    padding: 1.5rem;
  }
`;

const Graphic = styled.svg`
  fill: ${({ theme }) => brightness(theme.secondary, 10)};
  margin: 0 0 auto auto;
  min-height: 5rem;
  min-width: 5rem;
  max-height: 33%;
  max-width: 33%;
  @media only screen and (max-width: ${breakpoints.lg}rem) {
    max-height: 45%;
    max-width: 45%;
  }
  @media only screen and (max-width: ${breakpoints.md}rem) {
    max-height: 50%;
    max-width: 50%;
  }
  @media only screen and (max-width: ${breakpoints.sm}rem) {
    max-height: 85%;
    max-width: 85%;
  }
`;

const StartDate = styled(Bold)`
  color: ${({ theme }) => theme.secondary};
`;
