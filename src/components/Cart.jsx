import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../utils/fakeDb";

const Cart = () => {
  const pData = useLoaderData();
  let cart = [];

  const savedCart = getStoredCart();

  for (const id in savedCart) {
    const foundProduct = pData.find((product) => product.id === id);

    if (foundProduct) {
      foundProduct.quantity = savedCart[id];
      cart.push(foundProduct);
    }
  }
  console.log(cart);
  return (
    <div>
      {cart.map((cartItem) => (
        <p>{cartItem.name}</p>
      ))}
    </div>
  );
};

export default Cart;
