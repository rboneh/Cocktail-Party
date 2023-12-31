export function make_cocktail(data, i) {

  // function gets cocktail recipe object and object #SN.
  // it extracts recipe data and image and generate Bootsrap carousel item
  // item #1 is active

  // console.log(data.drinks[0])
  const cocktailObject = data.drinks[0];
  console.log(cocktailObject);
  let listItems = "";

  for (let i = 1; i <= 15; i++) {
    // there are up to 15 ingredients

    const strIngredientI = "strIngredient" + i;
    const strMeasureI = "strMeasure" + i;
    const ingredient = cocktailObject[strIngredientI];
    const measure = cocktailObject[strMeasureI];

    // const listItem = `<li>${ingredient}, ${measure}</li>`;
    // listItems += listItem;

    if (ingredient) {
      const listItem = `<li>${ingredient}, ${measure}</li> 
`;
      listItems += listItem;

    } else {
      //break upon 1st null ingredient
      break;
    }
  }


  let isActive = "";
  if (i === 0) { isActive = "active" }; //1st item is active

  //plug in reciepe data into recipe template
  const coctail = `<div class="carousel-item ${isActive}">
  <div class="card text-bg-dark mx-auto" style="width:100%" >
    <img class="card-img-top" src=${cocktailObject.strDrinkThumb} alt="Card image">
      <div class="card-body">
        <h4 class="card-title">${cocktailObject.strDrink}</h4>
        <h5>Ingredients</h5>
        <p class="card-text">
          <ul class="list-unstyled">
          ${listItems}
          </ul>
        </p>
        <h4>Preparation</h4>
        <p>${cocktailObject.strInstructions}</p>
        <h5> Serve in ${cocktailObject.strGlass}</h5>
      </div>
    </div>
</div >
`
  return coctail;
}
