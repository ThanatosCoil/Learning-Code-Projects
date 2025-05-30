import React, { useState } from "react";
import ExpenseTracker from "./components/ExpenseTracker";
import FormBuilder from "./components/FormBuilder";
import MealsApp from "./components/MealsApp";
import PasswordGenerator from "./components/PasswordGenerator";
import ProductCard from "./components/ProcutCard";
import ProductSidebar from "./components/ProductSidebar";
import QuizLayout from "./components/QuizLayout";
import RecipeApp from "./components/RecipeApp";
import Task from "./components/Task";
import TodoList from "./components/TodoList";
import Notes from "./components/Notes";
import { data } from "./db/data";
import { useFilterStore } from "./store/useProductStore";

interface Product {
  id: string;
  country: string;
  img: { black: string; [key: string]: string };
  price: number;
}

const appOptions = [
  { label: "Product Filter", value: "product" },
  { label: "Recipe App", value: "recipe" },
  { label: "Expense Tracker", value: "expense" },
  { label: "Password Generator", value: "password" },
  { label: "Meals App", value: "meals" },
  { label: "Form Builder", value: "form" },
  { label: "Todo List", value: "todo" },
  { label: "Task", value: "task" },
  { label: "Quiz Layout", value: "quiz" },
  { label: "Notes", value: "notes" },
];

const App = () => {
  const [selectedApp, setSelectedApp] = useState("product");
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore((state) => state);

  const filteredData = data.filter((item: Product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColor && matchesCountry && matchesPrice;
  });

  let content: React.ReactNode = null;
  switch (selectedApp) {
    case "recipe":
      content = <RecipeApp />;
      break;
    case "expense":
      content = <ExpenseTracker />;
      break;
    case "password":
      content = <PasswordGenerator />;
      break;
    case "meals":
      content = <MealsApp />;
      break;
    case "form":
      content = <FormBuilder />;
      break;
    case "todo":
      content = <TodoList />;
      break;
    case "task":
      content = <Task />;
      break;
    case "quiz":
      content = <QuizLayout />;
      break;
    case "notes":
      content = <Notes />;
      break;
    case "product":
    default:
      content = (
        <>
          <ProductSidebar />
          <div className="p-4 flex flex-wrap justify-center items-center">
            {filteredData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      );
      break;
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
          value={selectedApp}
          onChange={(e) => setSelectedApp(e.target.value)}
          style={{ padding: "4px 8px", borderRadius: 4 }}
        >
          {appOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default App;
