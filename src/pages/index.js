import Page from "../components/Page";
import Test1 from "../modules/Test1";
import Test2 from "../modules/Test2";

export default function Home() {
  return (
    <Page>
      <Test1 />
      <Test2 />
      <Test1 />
    </Page>
  );
}
