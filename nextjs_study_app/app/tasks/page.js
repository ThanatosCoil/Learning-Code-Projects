import TaskForm from "../components/TaskForm";
import TaskFormCustom from "../components/TaskFormCustom";
import TaskList from "../components/TaskList";
export const dynamic = "force-dynamic";
const page = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};
export default page;
