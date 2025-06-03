import { useMyContext } from "../hooks/useMyContext";

const SlotContent = () => {
  const { setValue } = useMyContext();
  return (
    <div>
      <button onClick={() => setValue("New value from SlotContent")}>
        Update Context value
      </button>
    </div>
  );
};
export default SlotContent;
