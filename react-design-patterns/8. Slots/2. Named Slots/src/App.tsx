import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        //Named Slots
        cardTitle={<h1>Card Title</h1>}
        cardDescription={<p>Card Description</p>}
        cardButton={<button>Learn More</button>}
      />
    </div>
  );
};
export default App;
