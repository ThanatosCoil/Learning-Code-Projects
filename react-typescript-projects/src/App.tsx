import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import Profile from "./ProfileSiteProject/Profile";
import Sidebar from "./ProfileSiteProject/Sidebar";
import { BlogProvider } from "./shared/BlogContext";
import { useState } from "react";
import { Blog } from "./types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";
import Dashboard from "./SortingProject/Dashboard";

const projectOptions = [
  { label: "Profile Project", value: "profile" },
  { label: "Sorting Project", value: "sorting" },
  { label: "Blog Project", value: "blog" },
];

const App = () => {
  const [isModalopen, setIsModalopen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [selectedProject, setSelectedProject] = useState("profile");

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setIsModalopen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalopen(true);
  };

  let content: React.ReactNode = null;
  switch (selectedProject) {
    case "profile":
      content = (
        <>
          <Sidebar />
          <Profile />
        </>
      );
      break;
    case "sorting":
      content = <Dashboard />;
      break;
    case "blog":
      content = (
        <BlogProvider>
          <Navigation />
          <div className="flex justify-center">
            <section className="mx-auto p-6">
              <div>
                <button
                  onClick={openModalForNewBlog}
                  className="ml-[7rem] bg-black flex items-center justify-center text-white px-4 py-2 rounded mb-4"
                >
                  Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
                </button>
                <ArticleList onEdit={openModalForEdit} />
                {isModalopen && (
                  <Modal onClose={() => setIsModalopen(false)}>
                    <BlogForm
                      existingBlog={editingBlog}
                      onClose={() => setIsModalopen(false)}
                    />
                  </Modal>
                )}
              </div>
            </section>
            <div className="w-[30%]">
              <PeopleToFollow />
              <TrendsList />
              <TopicsList />
            </div>
          </div>
        </BlogProvider>
      );
      break;
    default:
      content = null;
  }

  return (
    <div>
      {content}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: "white",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          padding: 8,
        }}
      >
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          style={{ padding: "4px 8px", borderRadius: 4, color: "#222" }}
        >
          {projectOptions.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ color: "#222" }}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default App;
