import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key == "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input value (Press Enter): {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });

  // const [name, setName] = useState("");
  // const [hasError, sethasError] = useState(false);
  // const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    // setName(event.target.value);
    // sethasError(event.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  function toggleError() {
    // sethasError((prev) => !prev);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted: " + JSON.stringify(form));
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      {/* <Button onClick={toggleError}>Toggle Error</Button> */}
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button
          disabled={form.hasError}
          isActive={!form.hasError}
          onClick={handleSubmit}
        >
          Отправить
        </Button>
      </form>
      <hr />

      <StateVsRef />
    </section>
  );
}
