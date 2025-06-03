import Calculator from "./components/Calculator/Calculator";
import Counter from "./components/Counter";
import FocusInputAndTimer from "./components/FocusInputAndTimer";
import Profile from "./components/Profile";
import ReducerCounter from "./components/ReducerCounter";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";
import UpdateUser from "./components/UpdateUser";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./UserContext";
import { useState } from "react";

const componentOptions = [
  { label: "Calculator", value: "calculator" },
  { label: "Counter", value: "counter" },
  { label: "Focus Input And Timer", value: "focusInputAndTimer" },
  { label: "Profile", value: "profile" },
  { label: "Reducer Counter", value: "reducerCounter" },
  { label: "Shopping List", value: "shoppingList" },
  { label: "Todo List", value: "todoList" },
  { label: "User Profile", value: "userProfile" },
];

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("calculator");

  let content = null;
  switch (selectedComponent) {
    case "calculator":
      content = <Calculator />;
      break;
    case "counter":
      content = <Counter />;
      break;
    case "focusInputAndTimer":
      content = <FocusInputAndTimer />;
      break;
    case "profile":
      content = <Profile />;
      break;
    case "reducerCounter":
      content = <ReducerCounter />;
      break;
    case "shoppingList":
      content = <ShoppingList />;
      break;
    case "todoList":
      content = <TodoList />;
      break;
    case "userProfile":
      content = (
        <UserProvider>
          <UpdateUser />
          <UserProfile />
        </UserProvider>
      );
      break;
    default:
      content = null;
  }

  return (
    <div className="container">
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
};
export default App;
