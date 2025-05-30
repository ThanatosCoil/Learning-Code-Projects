import User from "./components/User";
import FocusInput from "./components/FocusInput";
import ContactForm from "./components/ContactForm";
import EventHandling from "./components/EventHandling";
import Counter from "./components/Counter";
import Form from "./components/Form";

const App = ({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) => {
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme (current: {theme})</button>
      <User name="John" age={20} isStudent={true} />
      <div className="bg-gray-700 w-full h-1 mt-10 mb-10" />
      <FocusInput />
      <div className="bg-gray-700 w-full h-1 mt-10 mb-10" />
      <ContactForm />
      <div className="bg-gray-700 w-full h-1 mt-10 mb-10" />
      <EventHandling />
      <div className="bg-gray-700 w-full h-1 mt-10 mb-10" />
      <Counter />
      <div className="bg-gray-700 w-full h-1 mt-10 mb-10" />
      <Form />
    </div>
  );
};
export default App;
