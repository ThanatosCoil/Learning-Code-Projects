import { people } from "../../data";
import Person from "./Person";

const List = () => {
  return (
    <>
      <h1 style={{ color: "black" }}>People</h1>
      <div>
        {people.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </div>
    </>
  );
};
export default List;
