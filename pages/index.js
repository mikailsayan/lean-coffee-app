import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return ( 
    <>
      <Typography variant="h1">Home</Typography>
      <Link href="/create">Create a new card</Link>
    </>
  )
}
