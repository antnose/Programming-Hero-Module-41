import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../utilities/localstorage";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();

      // console.log(storedCart);
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log("saved Cart", savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    // const storedItem = addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // visual cart remove
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    // remove from  LS
    removeFromLS(id);
  };

  return (
    <>
      <h2>Bottles available {bottles.length} </h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />

      <div className="bottleContainer">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Bottles;
