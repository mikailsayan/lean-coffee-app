import Card from "../../../src/models/Card";

export default async function handler(req, res) {
  const { id } = req.query;
  // const cards = getCards();

  // const singleCard = cards.find((card) => card.id === id);

  if (req.method === "DELETE") {
    const deletedCard = await Card.findByIdAndDelete(id);
    res.status(200).json({ message: "card deleted", card: deletedCard });
  } else if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    const changedCard = await Card.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({ message: "card updated", card: changedCard });
  } else {
    const singleCard = await Card.findById(id);
    res.status(200).json(singleCard);
  }

  //const index = cards.findIndex((card) => card.id === id);

  //res.status(200).json(cards[index]);
}

/* import { getCards } from "../../../src/services/get-cards";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
export default function handler(request, response) {
  const { id } = request.query;
  const cards = getCards();
  const singleCard = cards.find((card) => card.id === id);
  if (request.method === "DELETE") {
    response.status(200).json({ message: "card deleted", card: singleCard });
  } else if (request.methode === "PUT") {
    const changedCard = JSON.parse(request.body);
    response.status(200).json({ message: "card updated", card: changedCard });
  } else {
    response.status(200).json(singleCard);
  }
}
 */
