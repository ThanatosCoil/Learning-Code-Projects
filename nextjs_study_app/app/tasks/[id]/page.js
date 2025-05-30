import EditForm from "@/app/components/EditForm";
import { getOneTasks } from "@/utils/actions";
import Link from "next/link";

const SingleTask = async ({ params }) => {
  const task = await getOneTasks(params.id);
  return (
    <>
      <div className="mb-16 ">
        <Link href="/tasks" className="btn btn-accent ">
          Back to task list
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SingleTask;
