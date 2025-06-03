import usePasswordStore from "../store/usePasswordStore";

const PasswordGenerator = () => {
  const {
    length,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    generatedPassword,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUppercase,
    toggleLowercase,
    generatePassword,
  } = usePasswordStore();

  const handleGeneratePassword = () => generatePassword();

  return (
    <div className="w-[40rem] p-8 mx-auto bg-white shadow-lg rounded-lg ">
      <h1 className="text-2xl font-bold text-center mb-4 p-10">
        Password Generator
      </h1>
      <div className="flex flex-col gap-4">
        <label
          htmlFor="length"
          className="block text-sm font-medium text-gray-700"
        >
          Password Length
        </label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(+e.target.value)}
          min={1}
          max={64}
          className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex items-center mt-3">
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={toggleNumbers}
        />
        <label className="ml-2 text-sm">Include Numbers</label>
      </div>
      <div className="flex items-center mt-3">
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={toggleSymbols}
        />
        <label className="ml-2 text-sm">Include Symbols</label>
      </div>
      <div className="flex items-center mt-3">
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={toggleUppercase}
        />
        <label className="ml-2 text-sm">Include Uppercase</label>
      </div>
      <div className="flex items-center mt-3">
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={toggleLowercase}
        />
        <label className="ml-2 text-sm">Include Lowercase</label>
      </div>

      <button
        onClick={handleGeneratePassword}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Generate Password
      </button>

      {generatedPassword && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="text-lg break-all">{generatedPassword}</p>
        </div>
      )}
    </div>
  );
};
export default PasswordGenerator;
