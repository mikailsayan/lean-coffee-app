import { Typography } from "@mui/material";
import {getCards} from "../services/get-cards";
import CardGrid from "../src/components/CardGrid";

export function getStaticProps() {
const cards = getCards();

  return {
    props: {
      cards,
    }
  }
}

export default function Cards({cards}) {
  console.log(cards)
    return ( 
      <>
        <Typography variant="h1">Cards</Typography>
        <CardGrid cards={cards}></CardGrid>
      </>
    )
  }
  