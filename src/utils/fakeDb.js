const addToDb = (id) => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  console.log(storedCart);
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  console.log(shoppingCart);

  const quantity = shoppingCart[id];
  console.log(quantity);

  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};

  //   get the previous data from localStorage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export { addToDb, getStoredCart };
