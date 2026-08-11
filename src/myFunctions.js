const searchData = (products, search) => {
  if (!search) return products;
  const temp = products.filter((item) =>
    item.title.toLowerCase().trim().includes(search),
  );
  return temp;
};

const categoryData = (products, category) => {
  if (!category) return products;
  const temp = products.filter((item) => item.category == category);
  return temp;
};

const totalFunc = (products) => {
  return products.reduce((total, item) => total + item.price * item.countT, 0);
};

const allFunc = (products) => {
  const total = products.reduce((x, item) => x + item.countT, 0);
  return total;
};

const tedadFunc = (state, id) => {
  const x = state.findIndex((item) => item.id == id);

  if (x == -1) return 0;
  else return state[x].countT;
};

export { searchData, categoryData, totalFunc, allFunc, tedadFunc };
