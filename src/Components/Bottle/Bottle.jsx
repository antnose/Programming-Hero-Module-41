import "./Bottle.css";

const Bottle = ({ bottle }) => {
  return (
    <div className="bottleContainer">
      <h2>Bottle</h2>
      <p>Name: {bottle.name} </p>
      <img className="bottleContainer" src={bottle.img} alt="" />
    </div>
  );
};

export default Bottle;
