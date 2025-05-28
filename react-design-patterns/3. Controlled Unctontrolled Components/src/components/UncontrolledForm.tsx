import { useRef } from "react";

const UncontrolledForm = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const hairColorInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (nameInput.current && ageInput.current && hairColorInput.current) {
      console.log(nameInput.current.value);
      console.log(ageInput.current.value);
      console.log(hairColorInput.current.value);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={nameInput}
        type="text"
        name="name"
        placeholder="Name"
        className="border"
      />
      <input
        ref={ageInput}
        type="number"
        name="age"
        placeholder="Age"
        className="border"
      />
      <input
        ref={hairColorInput}
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        className="border"
      />
      <input
        type="submit"
        name="submit"
        placeholder="Submit"
        className="border"
      />
    </form>
  );
};
export default UncontrolledForm;
