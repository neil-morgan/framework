import Page from "../components/Page";
import NextRace from "../modules/NextRace";
import UpcomingRaces from "../modules/UpcomingRaces";

export default function Schedule() {
  return (
    <Page>
      <NextRace />
      <UpcomingRaces />
    </Page>
  );
}
