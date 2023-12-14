import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "www.thecocktaildb.com/api/json/v1/1/random.php";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/get-random", async (req, res) => {
  console.log(eq.body);
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs");
  } catch (error) {
    res.render("index.ejs"); //, { content: JSON.stringify(error.response.data) });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
