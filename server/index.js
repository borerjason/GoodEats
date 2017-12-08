const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const getRecipes = require('./getRecipes');
// const md = require('../database/model');

const app = express();
const staticPath = path.join(__dirname, '/../client/dist');

// app.use(cors());
app.use(express.static(staticPath));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// app.post('/recipes', (req, res) => {
//   const searchTerm = req.body;
//   getRecipes.getDataFromRecipeAPI(searchTerm)
//     .then(({ data }) => {
//       const recipes = data.hits.map(recipe =>
//         recipe.recipe);
//       res.send(recipes);
//     })
//     .catch(() => {
//       console.log('Could not find your items');
//     });
// });

// app.post('/favorites', (req, res) => {
//   const recipe = req.body.item;
//   console.log('RECIPE', recipe);
//   md.add(recipe)
//     .then(() => {
//       res.send('Added to Favorites');
//     });
// });

// app.get('/data', (req, res) => {
//   md.getRecipes()
//   console.log('RESULT FROM GET REQUEST', result);
// });


const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Connected on port: ${port}`);
});
