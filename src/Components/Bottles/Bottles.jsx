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

      <div className="bottleContainer">
        {bottles.map((bottle) => (
          <Bottle bottle={bottle} key={bottle.id} />
        ))}
      </div>
    </>
  );
};

export default Bottles;

// complete 1.02 second in 5th video of 41 module
