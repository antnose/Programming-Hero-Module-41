import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  return (
    <div className="bottleContainer">
      <img className="bottleImg" src={bottle.img} alt={bottle.name} />
      <div className="bottleInfo">
        <p className="bottleName">Name: {bottle.name}</p>
        <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
      </div>
    </div>
  );
};

export default Bottle;
