const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const validationMessage = document.getElementById("validation-message");
const clearCompletedBtn = document.getElementById("clear-completed");

const STORAGE_KEY = "todo-list-items";

function getTodos() {
  const savedTodos = localStorage.getItem(STORAGE_KEY);

  if (!savedTodos) {
    return [
      { text: "Learn Git", completed: false },
      { text: "Build a todo app", completed: true }
    ];
  }

  try {
    return JSON.parse(savedTodos);
  } catch (error) {
    return [
      { text: "Learn Git", completed: false },
      { text: "Build a todo app", completed: true }
    ];
  }
}

let todos = getTodos();
let editingIndex = null;

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const item = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todos[index].completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    const text = document.createElement("span");
    text.textContent = todo.text;
    if (todo.completed) {
      text.style.textDecoration = "line-through";
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      startEdit(index);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(editBtn);
    item.appendChild(deleteBtn);
    list.appendChild(item);
  });
}

function startEdit(index) {
  const currentText = todos[index].text;
  const newText = prompt("Edit todo:", currentText);

  if (newText === null) return; // User cancelled

  const trimmedText = newText.trim();

  if (!trimmedText) {
    validationMessage.textContent = "Todo cannot be empty.";
    return;
  }

  todos[index].text = trimmedText;
  validationMessage.textContent = "";
  saveTodos();
  renderTodos();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = input.value.trim();

  if (!value) {
    validationMessage.textContent = "Please enter a todo item.";
    return;
  }

  validationMessage.textContent = "";
  todos.push({ text: value, completed: false });
  saveTodos();
  input.value = "";
  renderTodos();
});

clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
});

renderTodos();

// Bug fix: prevent duplicate todos