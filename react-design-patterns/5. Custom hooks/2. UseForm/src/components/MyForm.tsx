import useForm from "../hooks/useForm";

const MyForm = () => {
  const { values, handleChange, handleSubmit, submitted } = useForm({
    name: "",
    email: "",
  });

  const onSubmit = () => {
    console.log("Submitted:", values);
  };

  return (
    <div>
      {submitted ? (
        <h2>Thank you for submitting your information!</h2>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
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
                name="email"
                value={values.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md "
              />
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-md">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default MyForm;
