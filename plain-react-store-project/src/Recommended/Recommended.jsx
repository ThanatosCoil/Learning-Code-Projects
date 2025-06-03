import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button title="All Products" value="" onClickHandler={handleClick} />
          <Button title="Nike" value="Nike" onClickHandler={handleClick} />
          <Button title="Adidas" value="Adidas" onClickHandler={handleClick} />
          <Button title="Puma" value="Puma" onClickHandler={handleClick} />
          <Button title="Vans" value="Vans" onClickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};
export default Recommended;
