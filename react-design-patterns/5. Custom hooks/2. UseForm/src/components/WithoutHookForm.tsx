import { useState } from "react";

const WithoutHookForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Submitted:", { name, email });
  };

  return (
    <div>
      {submitted ? (
        <h2>Thank you for submitting your information!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-300 rounded-md "
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded-md "
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-1 rounded-md"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default WithoutHookForm;
