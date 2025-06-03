import Input from "./Input";

export default {
  title: "forms/Input",
  component: Input,
};

export const SmallInput = () => <Input size="10rem" placeholder="Small" />;
export const MediumInput = () => <Input size="20rem" placeholder="Medium" />;
export const LargeInput = () => <Input size="30rem" placeholder="Large" />;
