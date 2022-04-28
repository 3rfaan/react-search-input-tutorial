import express from "express";
const app = express();
import cors from "cors";

import { Users } from "./users.js";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  const maxResults = 10;
  const searchResults = search(Users).splice(0, maxResults);

  return res.status(200).json(searchResults);
});

app.listen(5005, () => console.log("API is working!"));
