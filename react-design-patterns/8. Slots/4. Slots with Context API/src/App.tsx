import SlotComponent from "./components/SlotComponent";
import SlotContent from "./components/SlotContent";
import { MyProvider } from "./context/MyContext";

const App = () => {
  return (
    <MyProvider>
      <SlotComponent>
        <SlotContent />
      </SlotComponent>
    </MyProvider>
  );
};
export default App;
