import Question from "./Question";
import QuizSidebar from "./QuizSidebar";

const QuizLayout = () => {
  return (
    <div className="flex h-screen">
      <QuizSidebar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Question />
      </div>
    </div>
  );
};

export default QuizLayout;
