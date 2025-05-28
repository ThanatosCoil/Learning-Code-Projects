import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card>
        {/* Default Slots (Anonymous Slots) */}
        <h1>Card Title</h1>
        <p>Card Description</p>
        <button>Learn More</button>
      </Card>
    </div>
  );
};
export default App;
