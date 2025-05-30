import { type PropsWithChildren } from "react"; // Испортируем дженерик из реакта

// type ComponentProps = { name: string; id: number; children?: React.ReactNode }; // Хардкодим тип детей сами
type ComponentProps = PropsWithChildren<{ name: string; id: number }>; // Используем дженерик, чтобы самим не задавать тип детей

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>ID: {id}</h1>
      {children}
    </div>
  );
}

export default Component;
