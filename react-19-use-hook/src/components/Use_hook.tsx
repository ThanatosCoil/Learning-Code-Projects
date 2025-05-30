// Позволяет читать и загружать данные ассинхронно, такие как промисы и контекст. В отличии от других хуков можно использовать в ифах и циклах
import { use } from "react";

const fetchData = async () => {
  const res = await fetch("http://date.jsontest.com");
  return res.json();
};

const Use_hook = () => {
  const data = use(fetchData());
  return <div>{data.date}</div>;
};
export default Use_hook;
