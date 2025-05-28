const Header = () => {
  return (
    <header className=" bg-slate-700 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold text-left pl-4">
        My dashboard
      </h1>
      <div>
        <button className="bg-slate-100 text-slate-700 px-2 py-2 rounded-md ml-auto m-2">
          Profile
        </button>
        <button className="bg-slate-100 text-slate-700 px-2 py-2 rounded-md ml-auto">
          Logout
        </button>
      </div>
    </header>
  );
};
export default Header;
