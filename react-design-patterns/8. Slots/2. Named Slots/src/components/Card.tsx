import { ReactNode } from "react";

interface CardProps {
  cardTitle: ReactNode;
  cardDescription: ReactNode;
  cardButton: ReactNode;
}

const Card = ({ cardTitle, cardDescription, cardButton }: CardProps) => {
  return (
    <div>
      {cardTitle}
      {cardDescription}
      {cardButton}
    </div>
  );
};
export default Card;
