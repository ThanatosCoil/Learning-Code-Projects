import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div className="cl">
      <h2 className="sidebar-title color-title">Colors</h2>
      <div className="input-component">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test1"
            value=""
            onChange={handleChange}
            className="sidebar-input"
          />
          <span className="checkmark all"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test1"
            value="white"
            onChange={handleChange}
            className="sidebar-input"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </div>
  );
};
export default Colors;
