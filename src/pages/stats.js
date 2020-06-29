import Page from "../components/Page";
import RecentRaces from "../modules/RecentRaces";
import PastRaces from "../modules/PastRaces";

export default function Stats() {
  return (
    <Page>
      <RecentRaces />
      <PastRaces />
    </Page>
  );
}
