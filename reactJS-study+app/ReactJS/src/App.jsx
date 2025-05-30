import ToDoList from "./components/ToDoProject/ToDoList";
import List from "./components/OptionalChaining/List";
import Person from "./components/OptionalChaining/Person";
import UserChallenge from "./components/AddRemoveFromDataChallenge/UserChallenge";
import FetchData from "./components/CustomHookFetch/CustonHookChallenge";
import DrillNavbar from "./components/PropDrill.jsx/Navbar";
import ReducerBasics from "./components/UseReducer/UseReducerStarterChallenge";
import LowerStateChallenge from "./components/PerformanceChallenge";
import Navbar from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";

const componentOptions = [
  { label: "Main Project", value: "main" },
  { label: "ToDo List", value: "todo" },
  { label: "Optional List", value: "list" },
  { label: "Optional Person", value: "person" },
  { label: "User Challenge", value: "userChallenge" },
  { label: "Fetch Data", value: "fetchData" },
  { label: "Prop Drill Navbar", value: "drillNavbar" },
  { label: "Reducer Basics", value: "reducerBasics" },
  { label: "Lower State Challenge", value: "lowerState" },
];

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const [selectedComponent, setSelectedComponent] = useState("main");

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading && selectedComponent === "main") {
    return <div className="loading">Loading...</div>;
  }

  let content = null;
  switch (selectedComponent) {
    case "main":
      content = (
        <main>
          {isOpen && <Modal />}
          <Navbar />
          <CartContainer />
        </main>
      );
      break;
    case "todo":
      content = <ToDoList />;
      break;
    case "list":
      content = <List />;
      break;
    case "person":
      content = <Person />;
      break;
    case "userChallenge":
      content = <UserChallenge />;
      break;
    case "fetchData":
      content = <FetchData />;
      break;
    case "drillNavbar":
      content = <DrillNavbar />;
      break;
    case "reducerBasics":
      content = <ReducerBasics />;
      break;
    case "lowerState":
      content = <LowerStateChallenge />;
      break;
    default:
      content = null;
  }

  return (
    <div>
      {content}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: "white",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          padding: 8,
        }}
      >
        <select
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
          style={{ padding: "4px 8px", borderRadius: 4, color: "#222" }}
        >
          {componentOptions.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ color: "#222" }}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
