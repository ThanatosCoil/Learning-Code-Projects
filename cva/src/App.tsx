import Button from "./components/Button";

const App = () => {
  return (
    <div className="space-y-4">
      <Button color="primary" size="large" state="active">
        Primary Large Button
      </Button>
      <Button color="secondary" size="medium" state="active">
        Secondary Medium Button
      </Button>
      <Button color="primary" size="small" state="disabled">
        Primary Small Button
      </Button>
      <Button>Default Button</Button>
    </div>
  );
};
export default App;
