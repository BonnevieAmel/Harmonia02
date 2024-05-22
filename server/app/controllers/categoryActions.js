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

const getCategories = (req, res) => {
  res.json(categories);
};

module.exports = { categories, getCategories };
