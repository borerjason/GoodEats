const axios = require('axios');
const flat = require('flat');
require('dotenv').config();


module.exports = (req, res) => {
  console.log();
  axios.get(process.env.ED_URL, {
    params: {
      q: req.body.term,
      app_id: process.env.APP_ID,
      app_key: process.env.APP_KEY,
    },
  })
    .then((results) => {
      const data = results.data.hits.map(item => (item.recipe));
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
