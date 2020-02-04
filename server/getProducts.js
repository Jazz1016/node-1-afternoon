const products = require("../products.json");

const getProducts = (req, res) => {
  if (req.query.price) {
    let items = products.filter(el => el.price >= parseInt(req.query.price));
    return res.status(200).send(items);
  } else res.status(200).send(products);
};

module.exports = getProducts;
