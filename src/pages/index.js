import Page from "../components/Page";
import Hero from "../modules/Hero";
import News from "../modules/News";

export default function Home() {
  return (
    <Page>
      <Hero />
      <News />
    </Page>
  );
}
