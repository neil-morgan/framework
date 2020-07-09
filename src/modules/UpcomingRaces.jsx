import styled from "styled-components";
import utilities from "../utilities";
import Config from "../config";
import { Section, Container, Col, Pod, Heading, Text, Button } from "..";

const { Title, Paragraph, Strong, Small, Link, List, Item } = Text;
const { breakpoints } = Config();
const { brightness } = utilities;

export default function UpcomingRaces() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Title>Upcoming Races</Title>
        </Col>

        <Col xs>
          <Races>
            <RaceItem />
            <RaceItem />
            <RaceItem />
            <RaceItem />
            <RaceItem />
            <RaceItem />
          </Races>
        </Col>

        <Col xs>
          <Button>See all</Button>
        </Col>
      </Container>
    </Section>
  );
}

const RaceItem = () => (
  <RaceItemStyle>
    <Identifier>
      <Logo src={"images/racelogo.png"} alt="xyz" />
      <Name>Race XYZ</Name>
    </Identifier>
    <Details>
      <Date>00/00/00</Date>
      <More>
        <Link>More</Link>
      </More>
    </Details>
  </RaceItemStyle>
);

const Races = styled.ul``;

const RaceItemStyle = styled.li`
  display: flex;
  align-items: center;
  background: ${({ theme }) => brightness(theme.background, -2.5)};
  &:nth-child(odd) {
    background: ${({ theme }) => theme.background};
  }
`;

const Identifier = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto 1rem 1rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 3rem 1rem 3rem;
  @media only screen and (max-width: ${breakpoints.sm}rem) {
    flex-direction: column;
    margin: 1rem 1rem 1rem 3rem;
  }
`;

const Logo = styled.img`
  max-width: 4rem;
  margin: 0 1rem 0 0;
`;

const Name = styled(Paragraph)`
  margin: 0;
`;

const Date = styled(Paragraph)`
  margin: 0;
`;

const More = styled(Paragraph)`
  margin: 0 0 0 3rem;
`;
