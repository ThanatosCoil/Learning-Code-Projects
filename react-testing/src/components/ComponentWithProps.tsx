const ComponentWithProps = ({ name }: { name: string }) => {
  return <div>{name ? `Hello ${name}` : <button>Sign up</button>}</div>;
};
export default ComponentWithProps;
