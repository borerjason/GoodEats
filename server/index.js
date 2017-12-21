const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const getRecipes = require('./getRecipes');
// const md = require('../database/model');
const controller = require('./controllers');

const app = express();
const staticPath = path.join(__dirname, '/../client/dist');

// app.use(cors());
app.use(express.static(staticPath));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.route('/recipes')
  .post(controller.fetchRecipes);


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
