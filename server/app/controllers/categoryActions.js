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

const browse = (req, res) => {
  res.json(categories);
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
