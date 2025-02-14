import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    console.log("Bottle to be added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <>
      <h2>Bottles available {bottles.length} </h2>
      <h3>Bottle in cart : {cart.length} </h3>

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

export default Bottles;
