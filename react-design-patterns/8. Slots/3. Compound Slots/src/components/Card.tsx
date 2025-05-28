import { ReactNode } from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import CardButton from "./CardButton";

const Card = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Button = CardButton;

export default Card;
