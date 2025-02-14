import "./Sunglass.css";
import Watch from "../Watch/Watch";
import {
  add,
  multiply,
  divideTheFirstumberByTheSecondNumber as devide,
} from "../Util/calculate";

const first = 55;
const second = 65;

const sum = add(first, second);
console.log(sum);
console.log(multiply(first, second));

console.log(devide(first, second));

const Sunglass = () => {
  return <div></div>;
};

export default Sunglass;
