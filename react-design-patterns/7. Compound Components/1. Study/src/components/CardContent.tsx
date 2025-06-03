const CardContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-2">
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  );
};
export default CardContent;
