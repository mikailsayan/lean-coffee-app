// Form wird erstellt und ein neuer Post wird zum Server kommuniziert
// Inputs und useState dazu wurden einfach aus Card.js kopiert

import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CardCreateForm() {
  const [contentValue, setContentValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();

    console.log(contentValue, nameValue);

    const response = await fetch("/api/card/create", {
      method: "POST",
      body: JSON.stringify({
        content: contentValue,
        name: nameValue,
      }),
    });
    console.log(await response.json());

    router.push("/cards");
  };

  return (
    <>
      <form onSubmit={submit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              name="content"
              label="content"
              fullWidth
              multiline
              row={2}
              value={contentValue}
              onChange={(event) => {
                setContentValue(event.target.value);
              }}
              sx={{ marginBottom: "1rem" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="name"
              fullWidth
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
