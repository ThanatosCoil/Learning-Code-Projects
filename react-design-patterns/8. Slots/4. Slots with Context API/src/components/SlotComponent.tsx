import { ReactNode } from "react";
import { useMyContext } from "../hooks/useMyContext";

const SlotComponent = ({ children }: { children: ReactNode }) => {
  const { value } = useMyContext();
  return (
    <div>
      <h3>Context value: {value}</h3>
      <div>{children}</div>
    </div>
  );
};
export default SlotComponent;
