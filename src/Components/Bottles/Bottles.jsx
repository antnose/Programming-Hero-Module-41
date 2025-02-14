import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <>
      <h2>Bottles Here {bottles.length} </h2>
      {bottles.map((bottle) => (
        <Bottle bottle={bottle} key={bottle.id} />
      ))}
    </>
  );
};

export default Bottles;
