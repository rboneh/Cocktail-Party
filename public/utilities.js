export function make_cocktail(data) {
    console.log(data.drinks[0])
    const cocktailObject = data.drinks[0];
    const coctail = `<div class="carousel-item active">
  < div class="card text-bg-dark" style="width:400px" >
    <img class="card-img-top" src=${cocktailObject.strDrinkThumb} alt="Card image">
      <div class="card-body">
        <h4 class="card-title">${cocktailObject.strDrink}</h4>
        <h5>Ingredients</h5>
        <p class="card-text">
          <ul>
            <li>Vodka", 1 1/2 oz</li>
            <li>Tomato juice,3 oz</li>
            <li>Lemon juice, 1 dash ,</li>
            <li>Worcestershire sauce, 1/2 tsp,</li>
            <li>Tabasco sauce, 2-3 drops </li>
            <li>Lime, 1 wedge</li>
          </ul>
        </p>
        <h4>Preparation</h4>
        <p>${cocktailObject.strInstructions}</p>
      </div>
    </div>
</div >
`
return coctail;
}

// {
//     drinks: [
//         {
//             idDrink: '11121',
//             strDrink: 'Bobby Burns Cocktail',
//             strDrinkAlternate: null,
//             strTags: null,
//             strVideo: null,
//             strCategory: 'Ordinary Drink',
//             strIBA: null,
//             strAlcoholic: 'Alcoholic',
//             strGlass: 'Cocktail glass',
//             strInstructions: 'Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.',
//             strInstructionsES: null,
//             strInstructionsDE: 'Alle Zutaten (außer Zitronenschale) mit Eis verrühren und in ein Cocktailglas abseihen. Die Zitronenschale hinzufügen und servieren.',
//             strInstructionsFR: null,
//             strInstructionsIT: 'Aggiungere la scorza di limone e servire.Mescolare tutti gli ingredienti (tranne la buccia di limone) con ghiaccio e filtrare in una coppetta da cocktail.',
//             'strInstructionsZH-HANS': null,
//             'strInstructionsZH-HANT': null,
//             strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/km6se51484411608.jpg',
//             strIngredient1: 'Sweet Vermouth',
//             strIngredient2: 'Scotch',
//             strIngredient3: 'Benedictine',
//             strIngredient4: 'Lemon peel',
//             strIngredient5: null,
//             strIngredient6: null,
//             strIngredient7: null,
//             strIngredient8: null,
//             strIngredient9: null,
//             strIngredient10: null,
//             strIngredient11: null,
//             strIngredient12: null,
//             strIngredient13: null,
//             strIngredient14: null,
//             strIngredient15: null,
//             strMeasure1: '1 1/2 oz ',
//             strMeasure2: '1 1/2 oz ',
//             strMeasure3: '1 1/4 tsp ',
//             strMeasure4: '1 twist of ',
//             strMeasure5: null,
//             strMeasure6: null,
//             strMeasure7: null,
//             strMeasure8: null,
//             strMeasure9: null,
//             strMeasure10: null,
//             strMeasure11: null,
//             strMeasure12: null,
//             strMeasure13: null,
//             strMeasure14: null,
//             strMeasure15: null,
//             strImageSource: null,
//             strImageAttribution: null,
//             strCreativeCommonsConfirmed: 'No',
//             dateModified: '2017-01-14 16:33:28'
//         }
//     ]
// }