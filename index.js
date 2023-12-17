import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import * as u from "./public/utilities.js";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const API_KEY = "1";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("partials/index.ejs", {carouselBody: defaultCarousel});
});

app.get("/get-random", async (req, res) => {
  try {
    const [response1, response2, response3] = await Promise.all([
      axios.get(API_URL),
      axios.get(API_URL),
      axios.get(API_URL)
    ]);
  
    const result1 = response1.data;
    const result2 = response2.data;
    const result3 = response3.data;
    const results =[response1.data, response2.data, response3.data ]
  
    // Combine the results as needed
    var cocktailsCarousel = "";

    for (let i = 0; i < 3; i++) {
      cocktailsCarousel += u.make_cocktail(results[i], i);
    }

    res.render("partials/index.ejs", { carouselBody: cocktailsCarousel });
  } catch (error) {
    console.error('Error:', error);
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const defaultCarousel = `<div class="carousel-item active">
  <div class="card text-bg-dark mx-auto" style="width:100%" >
    <img class="card-img-top" src="images/bloody-mary.jpg" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">Bloody Mary</h4>
        <h5>Ingredients</h5>
        <p class="card-text">
          <ul class="list-unstyled">
            <li>Vodka", 1 1/2 oz</li>
            <li>Tomato juice,3 oz</li>
            <li>Lemon juice, 1 dash ,</li>
            <li>Worcestershire sauce, 1/2 tsp,</li>
            <li>Tabasco sauce, 2-3 drops </li>
            <li>Lime, 1 wedge</li>
          </ul>
        </p>
        <h4>Preparation</h4>
        <p>Stirring gently, pour all ingredients into highball glass. Garnish.</p>
      </div>
    </div>
</div >

<div class="carousel-item">
  <div class="card text-bg-dark mx-auto" style="width:100%">
    <img class="card-img-top" src="images/pina-colada.jpg" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">Pina Colada</h4>
      <h5>Ingredients</h5>
      <p class="card-text">
      <ul class="list-unstyled">
        <li>Light rum, 3 oz </li>
        <li>Coconut milk, 3 tblsp</li>
        <li>"Pineapple, 3 tblsp</li>
      </ul>
      </p>
      <h4>Preparation</h4>
      <p>Mix with crushed ice in blender until smooth.
        Pour into chilled glass, garnish and serve.
      </p>
    </div>
  </div>
</div>

<div class="carousel-item">
  <div class="card text-bg-dark mx-auto" style="width:100%">
    <img class="card-img-top" src="images/mojito.jpg" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">Mojito</h4>
      <h5>Ingredients</h5>
      <p class="card-text">
      <ul class="list-unstyled">
        <li>Light rum, 2-3 oz</li>
        <li>Lime, Juice of 1</li>
        <li>Sugar, 2 tsp</li>
        <li>Mint, 2-4</li>
        <li>Soda Water</li>
      </ul>
      </p>
      <h4>Preparation</h4>
      <p>Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with
        cracked ice.
        Pour the rum and top with soda water. Garnish and serve with straw
      </p>
    </div>
  </div>
</div>
`