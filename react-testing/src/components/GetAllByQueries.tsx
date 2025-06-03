const GetAllByQueries = () => {
  return (
    <div>
      <label htmlFor="input1">Input 1</label>
      <input
        type="text"
        id="input1"
        placeholder="Text"
        value="Default value 1"
        disabled
      />
      <label htmlFor="input2">Input 2</label>
      <input
        type="text"
        id="input2"
        placeholder="Text"
        value="Default value 2"
        disabled
      />
      <input type="text" placeholder="Enter Something" />
      <input type="text" placeholder="Enter Something Else" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vitae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vitae!
      </p>

      <img src="image1.png" alt="Image 1" />
      <img src="image2.png" alt="Image 2" />

      <div title="Tooltip">Hover over me</div>
      <div title="Another Tooltip">Show Tooltip</div>

      <button role="button" disabled aria-label="Button">
        Disabled button 1
      </button>
      <button role="button" disabled aria-label="Button">
        Disabled button 2
      </button>

      <div data-testid="test-id-1">Test id 1</div>
      <div data-testid="test-id-2">Test id 2</div>
    </div>
  );
};
export default GetAllByQueries;
