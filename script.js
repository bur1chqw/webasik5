// Task 0
console.log("Burkhan Tokmagambet, SE-2525");
function hello() {
  alert("Hello, JavaScript World!");
}
if (location.pathname.endsWith("task0.html")) {
  hello();
}

// Task 1
function showVariables() {
  let name = "Burkhan";
  let age = 19;
  let isStudent = true;
  console.log("Name:", name, "Age:", age, "Student:", isStudent);
  console.log("Add:", 10 + 5, "Subtract:", 10 - 5);
  console.log("Multiply:", 10 * 5, "Divide:", 10 / 5);
  console.log("Hello, " + name);
}

// Task 2
function changeText() {
  document.getElementById("message").textContent = "The paragraph has changed!";
}

// Task 3
function changeColor() {
  document.getElementById("styleBox").style.backgroundColor = "lightgreen";
}
function changeSize() {
  document.getElementById("styleBox").style.fontSize = "25px";
}

// Task 4
function addItem() {
  const li = document.createElement("li");
  li.textContent = "New item";
  document.getElementById("items").appendChild(li);
}
function removeItem() {
  const list = document.getElementById("items");
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  }
}

// Task 5
const hoverBox = document.getElementById("hoverBox");
if (hoverBox) {
  hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "lightcoral");
  hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "#bcd8ff");
}

// Task 6
const typing = document.getElementById("typing");
if (typing) {
  typing.addEventListener("keyup", () => {
    document.getElementById("preview").textContent = typing.value;
  });
}

// Task 7
function calculate(operator) {
  const first = document.getElementById("num1").value;
  const second = document.getElementById("num2").value;
  const output = document.getElementById("result");
  if (first === "" || second === "") {
    output.textContent = "Enter both numbers";
    return;
  }
  const a = Number(first), b = Number(second);
  let result;
  if (operator === "+") result = a + b;
  else if (operator === "-") result = a - b;
  else if (operator === "*") result = a * b;
  else if (operator === "/") result = b === 0 ? "Cannot divide by zero" : a / b;
  output.textContent = "Result: " + result;
}

// Task 8
let tasks = [];
function addTask() {
  const input = document.getElementById("todoInput");
  const title = input.value.trim();
  if (!title) return;
  tasks.push({ title: title, done: false });
  input.value = "";
  renderTasks();
}
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
function renderTasks() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = task.title;
    if (task.done) text.classList.add("done");
    text.style.cursor = "pointer";
    text.addEventListener("click", () => toggleTask(index));
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => deleteTask(index));
    li.append(text, button);
    list.appendChild(li);
  });
}
