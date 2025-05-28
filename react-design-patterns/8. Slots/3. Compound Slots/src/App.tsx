import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card>
        <Card.Title>
          <h1>Card Title</h1>
        </Card.Title>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Button>
          <button>Card Button</button>
        </Card.Button>
      </Card>
    </div>
  );
};
export default App;
