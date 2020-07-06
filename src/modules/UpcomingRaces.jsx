import styled from "styled-components";
import utilities from "../utilities";
import Config from "../config";

import { Section, Container, Col, Pod, Heading, Text, Button } from "..";

const { breakpoints } = Config();
const { brightness } = utilities;

export default function UpcomingRaces() {
  return (
    <Section>
      <Container>
        <Col xs>
          <Heading.H1>Upcoming Races</Heading.H1>
        </Col>

        <Col xs>
          <Pod>
            <List>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </List>
          </Pod>
        </Col>

        <Col xs>
          <Button>See all</Button>
        </Col>
      </Container>
    </Section>
  );
}

const ListItem = () => (
  <Item>
    <Identifier>
      <Logo src={"images/racelogo.png"} alt="xyz" />
      <Name>Race XYZ</Name>
    </Identifier>
    <Details>
      <Date>00/00/00</Date>
      <More>
        <Text.A>More</Text.A>
      </More>
    </Details>
  </Item>
);

const List = styled.ul``;

const Item = styled.li`
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

const Name = styled(Text.P)`
  margin: 0;
`;

const Date = styled(Text.P)`
  margin: 0;
`;

const More = styled(Text.P)`
  margin: 0 0 0 3rem;
`;
