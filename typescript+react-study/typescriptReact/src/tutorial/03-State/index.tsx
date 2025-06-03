import { useState } from "react"; // useState это дженерик

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: "some url",
    text: "some text",
  },
  {
    id: 2,
    url: "some url",
    text: "some text",
  },
  {
    id: 3,
    url: "some url",
    text: "some text",
  },
];

function Component() {
  const [text, setText] = useState("Hello"); // Определил тип сам
  const [list, setList] = useState<string[]>([]); // Тип сам не определит, если массив пустой только по умолчанию, надо передать в дженерик тип
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">{text}</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("Bye");
          setLinks([...links, { id: 4, url: "url", text: "text" }]);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Component;
