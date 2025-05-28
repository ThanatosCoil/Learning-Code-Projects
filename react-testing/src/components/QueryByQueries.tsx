const QueryByQueries = () => {
  return (
    <div>
      <div role="alert" aria-live="assertive">
        Alert message
      </div>
      <button>Click me</button>
      <label htmlFor="input1">Label 1</label>
      <input id="input1" type="text" placeholder="Search" />
      <label htmlFor="input2">Label 2</label>
      <input id="input2" type="text" placeholder="Email" />
      <h1>Header Text</h1>
      <p>Paragraph Text</p>
      <div data-testid="custom-element">Custom Element</div>
      <input type="text" value="Prefilled text" />
    </div>
  );
};
export default QueryByQueries;
