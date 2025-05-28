import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { ButtonProps, CardProps, ModalProps } from "./component-types";

export type ComponentConfig =
  | { type: "button"; props: ButtonProps }
  | { type: "card"; props: CardProps }
  | { type: "modal"; props: ModalProps };

function ComponentFactory(config: ComponentConfig) {
  switch (config.type) {
    case "button":
      return <Button {...config.props} />;
    case "card":
      return <Card {...config.props} />;
    case "modal":
      return <Modal {...config.props} />;

    default:
      throw new Error("Invalid component type");
  }
}

export default ComponentFactory;
