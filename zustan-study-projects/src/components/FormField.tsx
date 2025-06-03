interface FormFieldProps {
  field: {
    label: string;
    type: "text" | "number" | "password" | "textarea" | "date" | "file";
    value: string;
  };
  index: number;
  onUpdate: (
    index: number,
    updatedField: {
      label: string;
      type: "text" | "number" | "password" | "textarea" | "date" | "file";
      value: string;
    }
  ) => void;
  onRemove: (index: number) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  field,
  index,
  onUpdate,
  onRemove,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onUpdate(index, { ...field, value: e.target.value });
  };

  if (field.type === "textarea") {
    return (
      <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
        <label className="block mb2 text-lg font-medium text-gray-700">
          {field.label}
          <textarea
            value={field.value}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="mt-2 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Remove
        </button>
      </div>
    );
  }

  if (field.type === "file") {
    return (
      <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
        <label className="block mb2 text-lg font-medium text-gray-700">
          {field.label}
          <input
            className="border border-gray-300 rounded-lg"
            type="file"
            onChange={(e) =>
              onUpdate(index, {
                ...field,
                value: e.target.files
                  ? Array.from(e.target.files)
                      .map((file) => file.name)
                      .join(", ")
                  : "",
              })
            }
          />
        </label>
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="mt-2 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <label className="block mb2 text-lg font-medium text-gray-700">
        {field.label}
        <input
          type={field.type}
          value={field.type === "file" ? "" : field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="mt-2 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Remove
      </button>
    </div>
  );
};

export default FormField;
