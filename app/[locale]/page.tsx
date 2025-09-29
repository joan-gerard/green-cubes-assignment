import { getTranslations } from "next-intl/server";
import { Cta } from "../components/Cta";
import { ImageGridHero } from "../components/ImageGridHero";
import { StatusOverview } from "../components/StatusOverview";

export default async function Home() {
  const t = await getTranslations();
  return (
    <ImageGridHero>
      <StatusOverview t={t} />

      <Cta t={t} />
    </ImageGridHero>
  );
}
