import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://www.guardianoffshore.com.au/wp-content/uploads/2015/03/banner-placeholder.jpg"
  );

  const [profileUrl, setProfileUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera className="h-6 w-6" />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* Profile logo */}

      <div className="flex items-center ml-4 mt-[2rem] ">
        <img
          src={profileUrl}
          alt="Channel Logo"
          className="w-40 h-40  object-cover rounded-full border-4 border-white relative"
        />

        <button className="absolute z-10 ml-[3.6rem] mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        {/* Profile Details */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ">Thanatos</h1>
          <p>Coil</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            error blanditiis cum reiciendis necessitatibus? Iusto, quia aperiam!
            Incidunt suscipit sequi quae, qui distinctio aliquid, laborum soluta
            dicta dolorum mollitia similique!
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};
export default Profile;
