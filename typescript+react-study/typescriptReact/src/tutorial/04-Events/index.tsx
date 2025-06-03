import { useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // А через референс тип надо задавать самому, его можно увидеть если навестить на запись ивента onChange в этом случае и убрать там Handler
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // Запись из ТС чтобы не задавать утверждение типа
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData); // Создает объект из ключей по name инпутов и значение по значению инпутов
    console.log(data);

    const text = formData.get("text") as string; // Утверждение нужно потому что по дефолту оно рассматривает еще случай с нулем, а ноль не строка
    const person: Person = { name: data.text as string };
  };

  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => {
            setText(e.target.value); // Так, определил тип сам
          }}
        />
        <input
          type="email"
          name="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
}

export default Component;
