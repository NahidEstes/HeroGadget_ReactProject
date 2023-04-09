const addToDb = (id) => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    shoppingCart = JSON.stringify(storedCart);
  } else {
    localStorage.setItem("shopping-cart", id);
  }
  console.log(shoppingCart);
};

export { addToDb };
