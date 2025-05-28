import MyForm from "./components/MyForm";
import WithoutHookForm from "./components/WithoutHookForm";

const App = () => {
  return (
    <div>
      <WithoutHookForm />
      <br /> <hr /> <br /> <br />
      <MyForm />
    </div>
  );
};

export default App;
