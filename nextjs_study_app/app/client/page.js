"use client";
// Стейты, эффекты и другие реакт приблуды, надо использовать на стороне клиента а не сервера, используем команду выше
import { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">Count: {count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
};
export default page;
