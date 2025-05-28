const GetByQueries = () => {
  return (
    <div>
      <h1>Heading</h1>
      <button aria-label="Submit">Submit</button>
      <button id="cancel">Cancel</button>
      <input type="text" placeholder="Text" />
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google
      </a>
      <div data-testid="test-id">Test</div>
    </div>
  );
};
export default GetByQueries;
