import Sidebar from "./Sidebar";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="flex h-full min-h-screen bg-gray-900">
      <Sidebar />

      <Table />
    </div>
  );
};

export default Dashboard;
