const Sidebar = () => {
  return (
    <div className="bg-slate-900 h-full w-[10rem] text-white p-4">
      <h2 className="text-xl">Dashboard</h2>
      <ul className="mt-6 space-y-4">
        <li>
          <a className="hover:text-gray-500" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500" href="#settings">
            Settings
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500" href="#profile">
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
