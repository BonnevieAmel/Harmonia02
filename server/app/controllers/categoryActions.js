const tables = require("../../database/tables");

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();
  res.json(categoriesFromDB);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  const category = categories.find((cat) => cat.id === parsedId);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: "Catégorie non trouvée" });
  }
};

module.exports = { categories, browse, read };
