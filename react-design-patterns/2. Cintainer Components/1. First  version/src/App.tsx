import CommentsList from "./components/Details/CommentsList";
import TodoList from "./components/Details/TodoList";
import ResourceLoader from "./components/shared/ResourceLoader";
import SingleTodoLoader from "./components/shared/SingleTodoLoader";

//Изначально TodoList рендерится без пропсов
//ResourceLoader перехватывает этот рендер
//Создает клон компонента с добавленными пропсами
//Рендерит уже новую версию компонента с данными

const App = () => {
  return (
    <>
      <ResourceLoader resourceUrl="/todos/3" resourceName="todo">
        <TodoList />
      </ResourceLoader>

      <hr />
      <br />
      <ResourceLoader resourceUrl="/comments/1" resourceName="comments">
        <CommentsList />
      </ResourceLoader>
    </>
  );
};

export default App;
