import { FaHome, FaSearch, FaUser, FaUserAltSlash } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white">
      <ul className="p-4 flex flex-col justify-between items-center h-full">
        <div className="top">
          <li className="mb-2">
            <div className="flex items-center">
              <FaHome className="mb-3 w-6 h-6" />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center">
              <FaUser className="mb-3 w-6 h-6" />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center">
              <FaSearch className="mb-3 w-6 h-6" />
            </div>
          </li>
        </div>

        <div className="bottom">
          <li>
            <IoMdSettings className="w-5 h-5" />
            <FaUser className="mt-5 w-5 h-5" />
          </li>
        </div>
      </ul>
    </aside>
  );
};
export default Sidebar;
