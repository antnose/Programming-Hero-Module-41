import "./Bottle.css";

const Bottle = ({ bottle }) => {
  return (
    <div className="bottleContainer">
      <p>Name: {bottle.name} </p>
      <img className="bottleImg" src={bottle.img} alt="" />
    </div>
  );
};

export default Bottle;
