"use client";

import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "pending..." : "delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      {/* Таким образом передаем id к серверным action. Мы прячем сам импут, но его value хардкодим на id, которое у каждого таска разное, и при нажатии на кнопку форма отправляет value которое id */}
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;
