import "./Bottle.css";

const Bottle = ({ bottle }) => {
  return (
    <div className="bottleContainer">
      <img className="bottleImg" src={bottle.img} alt={bottle.name} />
      <div className="bottleInfo">
        <p className="bottleName">Name: {bottle.name}</p>
        <button>Purchase</button>
      </div>
    </div>
  );
};

export default Bottle;
