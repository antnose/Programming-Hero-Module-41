import { useEffect, useState } from "react";
import "./App.css";
import Sunglass from "./Components/Sunglass/Sunglass";
import Watch from "./Components/Watch/Watch";
import Header from "./Components/Header/Header";
import Bottles from "./Components/Bottles/Bottles";

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 8",
  //     price: 399,
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 6",
  //     price: 299,
  //   },
  //   {
  //     id: 3,
  //     name: "Garmin Forerunner 955",
  //     price: 499,
  //   },
  //   {
  //     id: 4,
  //     name: "Fitbit Versa 4",
  //     price: 229,
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTR 4",
  //     price: 199,
  //   },
  // ];

  return (
    <>
      {/* <h3>Module Introduction ES6 Modules and data storage integration</h3>
      <Sunglass />
      {watches.map((watch) => (
        <Watch watch={watch} key={watch.id} />
      ))} */}
      <Header />
      <Bottles />
    </>
  );
}

export default App;
// 7.50
