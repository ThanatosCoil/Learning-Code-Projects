const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// function createTask(event: SubmitEvent) { // ЗАДАЕМ ПРАВИЛЬНЫЙ ТИП ЕВЕНТА САМИ
//   event.preventDefault();
//   const taskDescription = formInput?.value;
//   if (taskDescription) {
//     // add task to list
//     // render tasks
//     // update local storage

//     formInput.value = "";
//     return;
//   }
//   alert("Please enter a task description");
// }

// taskForm?.addEventListener("submit", createTask); // ЕСЛИ ПЕРЕДАВАТЬ ФУНКЦИЮ ЧЕРЕЗ РЕФЕРЕНС И ЛОГИКУ ПИСАТЬ ТАМ А НЕ В СТРЕЛОЧНОЙ ФУНКЦИИ, ТО ТИП ЕВЕНТА НЕ БУДЕТ ПО ДЕФОЛТУ И ЕГО НУЖНО ЗАДАВАТЬ САМОМУ

taskForm?.addEventListener("submit", (event) => {
  // ЗДЕСЬ ЗАДАВАТЬ ТИП НЕ НАДО

  event.preventDefault();

  const taskDescription = formInput?.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };

    addTask(task);

    renderTask(task);

    updateStorage();

    formInput.value = "";

    return;
  }
  alert("Please enter a task");
});

function addTask(task: Task): void {
  tasks.push(task);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
  // checkbox
  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = "checkbox";
  taskCheckBox.checked = task.isCompleted;
  // toggle checkbox
  taskCheckBox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckBox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
