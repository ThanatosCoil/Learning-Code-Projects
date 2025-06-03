import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardTitle from "./CardTitle";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border rounded-lg shadow-lg w-[20rem] p-4 bg-white">
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
