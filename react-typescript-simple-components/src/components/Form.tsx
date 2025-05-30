import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert(`Form submitted: ${JSON.stringify(data)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          className="bg-white border-2"
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />

        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className=" bg-white border-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email adress",
              },
            })}
            id="email"
            placeholder="email"
          />

          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div>
          <input
            type="password"
            {...register("password", {
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            placeholder="password"
          />

          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Form;
