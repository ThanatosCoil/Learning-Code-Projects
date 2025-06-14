import ToDoList from "./js/todolist.js";
import ToDoItem from "./js/todoitem.js";

const toDoList = new ToDoList();

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const itemEntryForm = document.getElementById("ItemEntryForm");
  itemEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    processSubmition();
  });

  const clearItems = document.getElementById("clearItems");
  clearItems.addEventListener("click", (event) => {
    const list = toDoList.getList();
    if (list.length) {
      const confirmed = confirm(
        "Are you sure you want to clear the enire list?"
      );
      if (confirmed) {
        toDoList.clearList();
        refreshThePage();
      }
    }
  });

  refreshThePage();
};

const refreshThePage = () => {
  clearListDisplay();
  renderList();
  clearItemEntryField();
  setFocusonItemEntry();
};

const clearListDisplay = () => {
  const parentElement = document.getElementById("listItems");
  deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

const renderList = () => {
  const list = toDoList.getList();
  list.forEach((item) => {
    buildListItem(item);
  });
};

const buildListItem = (item) => {
  const div = document.createElement("div");
  div.className = "item";

  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = item.getId();
  check.tabIndex = 0;

  addClickListenerToCheckBox(check);

  const label = document.createElement("label");
  label.htmlFor = item.getId();
  label.textContent = item.getItem();

  div.appendChild(check);
  div.appendChild(label);

  const container = document.getElementById("listItems");
  container.appendChild(div);
};

const addClickListenerToCheckBox = (checkbox) => {
  checkbox.addEventListener("click", (event) => {
    toDoList.removeItemFromList(checkbox.id);
    setTimeout(() => {
      refreshThePage();
    }, 1000);
  });
};

const clearItemEntryField = () => {
  document.getElementById("newItem").value = "";
};

const setFocusonItemEntry = () => {
  document.getElementById("newItem").focus();
};

const processSubmition = () => {
  const newEntryText = getNewEntry();
  if (!newEntryText.length) return;
  const nextItemId = calcNextItemId();
  const toDoItem = createNewItem(nextItemId, newEntryText);
  toDoList.addItemToList(toDoItem);
  refreshThePage();
};

const getNewEntry = () => {
  return document.getElementById("newItem").value.trim();
};

const calcNextItemId = () => {
  let nextItemId = 1;
  const list = toDoList.getList();
  if (list.length > 0) {
    nextItemId = list[list.length - 1].getId() + 1;
  }
  return nextItemId;
};

const createNewItem = (itemId, itemText) => {
  const toDo = new ToDoItem();
  toDo.setId(itemId);
  toDo.setItem(itemText);
  return toDo;
};
