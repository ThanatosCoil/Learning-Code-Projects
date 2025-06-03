import Counter from "./components/Counter";
import MouseTracker from "./components/MouseTracker";

const App = () => {
  return (
    <div>
      <Counter
        render={(count: number) => <p>The current count is: {count}</p>}
      />
      <hr />
      <br />
      <br />
      <MouseTracker
        render={(position: any) => (
          <p>
            The current mouse position is: ({position.x}) - ({position.y})
          </p>
        )}
      />
    </div>
  );
};
export default App;
