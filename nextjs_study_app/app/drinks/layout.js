// Этот layout будет только для компонентов из этой папки и ее вложений
// Без чилдрен только лейаут и будет, page даже не появится

const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs</code>
        </pre>
      </div>
      {children}
    </div>
  );
};
export default DrinksLayout;
