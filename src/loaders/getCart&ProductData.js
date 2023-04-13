import { getStoredCart } from "../utils/fakeDb";

const productsAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  const savedCart = getStoredCart();
  let newArr = [];

  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      foundProduct.quantity = savedCart[id];
      newArr.push(foundProduct);
    }
  }
  return newArr;
};
