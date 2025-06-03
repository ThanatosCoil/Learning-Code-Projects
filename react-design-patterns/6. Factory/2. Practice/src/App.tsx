import ComponentFactory, { ComponentConfig } from "./utils/ComponentFactory";

const App = () => {
  const buttonConfig: ComponentConfig = {
    type: "button",
    props: {
      label: "Click Me",
      onClick: () => console.log("Button clicked"),
      disabled: false,
    },
  };

  const cardConfig: ComponentConfig = {
    type: "card",
    props: {
      title: "Card Title",
      content: "Card Content",
      footer: "Card Footer",
    },
  };

  const modalConfig: ComponentConfig = {
    type: "modal",
    props: {
      header: "Modal Header",
      content: "Modal Content",
      footer: "Modal Footer",
    },
  };

  return (
    <div>
      {ComponentFactory(buttonConfig)}
      {ComponentFactory(cardConfig)}
      {ComponentFactory(modalConfig)}
    </div>
  );
};
export default App;
