import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import Card from "./Card";
import { GoProjectSymlink } from "react-icons/go";
import About from "./About";
import { SiCoursera } from "react-icons/si";
import Contact from "./Contact";
import { useState } from "react";

// Используем другой placeholder, который доступен в России, например https://placehold.co/
const placeholderImage = "https://placehold.co/400x300";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image={placeholderImage}
            link="https://www.google.com"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image={placeholderImage}
            link="https://www.google.com"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image={placeholderImage}
            link="https://www.google.com"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 font-medium text-sm ${
              activeTab == tab.id
                ? "border-b-2 border-gray-400"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex items-center justify-center space-x-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div>
        <div className="mt-4 p-4 rounded-lg">
          {tabs.find((tab) => tab.id == activeTab)?.content}
        </div>
      </div>
    </div>
  );
};
export default Tabs;
