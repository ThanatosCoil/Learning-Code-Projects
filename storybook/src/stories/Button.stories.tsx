import { FaHome } from "react-icons/fa";
import Button from "./Button";

export default {
  title: "products/Buttons", //products folder/Buttons folder
  component: Button,
};

export const Primary = {
  args: {
    primary: true,
    label: "Primary",
    onClick: () => {
      alert("clicked");
    },
    loading: false,
    size: "medium",
    color: "#007bff",
    fullWidth: false,
    icon: <FaHome />,
    iconPosition: "left",
    ariaLabel: "Home",
  },
};
