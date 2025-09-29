import { Cta } from "../components/Cta";
import { ImageGridHero } from "../components/ImageGridHero";
import { StatusOverview } from "../components/StatusOverview";

export default async function Home() {
  return (
    <>
      <ImageGridHero>
        <></>
      </ImageGridHero>
      <StatusOverview />
      <Cta />
    </>
  );
}
