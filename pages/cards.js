import { Typography } from "@mui/material";
import { SWRConfig } from "swr";
import CardGrid from "../src/components/CardGrid";
import { getCards } from "../src/services/get-cards";
import swrFetcher from "../src/components/lib/swr-fetcher";

export async function getStaticProps() {
  const cards = await getCards();

  return {
    props: {
      //cards,
      fallback: {
        // folgende Daten (aus lokaler JSON Datein) sollen als Fallback genutz werden, wenn über Server folgende Route angefragt wird
        // (wenn über Browser Anfrage stattfindet, dann sollen Daten von der API geladen werden)
        "/api/cards": cards,
      },
    },
  };
}

export default function Cards({ /*cards*/ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback: fallback }}>
      <Typography variant="h1">Cards</Typography>
      <CardGrid /*cards={cards}*/ />
    </SWRConfig>
  );
}

//Vor swrFetch
