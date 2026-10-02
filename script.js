const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const todos = [
  { text: "Learn Git", completed: false },
  { text: "Build a todo app", completed: true }
];

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const item = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todos[index].completed = checkbox.checked;
      renderTodos();
    });

    const text = document.createElement("span");
    text.textContent = todo.text;
    if (todo.completed) {
      text.style.textDecoration = "line-through";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos();
    });

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(deleteBtn);
    list.appendChild(item);
  });
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
  input.value = "";
  renderTodos();
});

renderTodos();