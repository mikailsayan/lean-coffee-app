import Card from "../components/models/Card";
//import data from "./static-cards.json";
import { dbConnect } from "../components/lib/database";

export const getCards = async () => {
  await dbConnect();
  const data = await Card.find().populate("user");
  console.log(data);
  return data.map(({ id, content, user }) => ({
    id,
    content,
    name: user.name,
  }));
};

/* import data from "./static-cards.json";
export function getCards() {
  return data;
} */
