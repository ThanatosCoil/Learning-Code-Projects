const ListComponent = ({ items }: { items: string[] }) => {
  if (items.length === 0) {
    return (
      <div>
        <p>No items</p>
      </div>
    );
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default ListComponent;
