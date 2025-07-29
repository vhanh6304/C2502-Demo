let tasks = [];
let editingIndex = -1;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const content = taskInput.value.trim();
  if (!content) return alert("Nhập nội dung công việc");

  const task = { content, done: false };

  if (editingIndex === -1) {
    tasks.push(task);
  } else {
    tasks[editingIndex].content = content;
    editingIndex = -1;
  }

  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.style.textDecoration = task.done ? "line-through" : "none";
    li.innerHTML = `
      <input type="checkbox" ${task.done ? "checked" : ""} onclick="toggleDone(${i})" />
      ${task.content}
      <button onclick="editTask(${i})">Sửa</button>
      <button onclick="deleteTask(${i})">Xoá</button>
    `;
    taskList.appendChild(li);
  });
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById("taskInput").value = task.content;
  editingIndex = index;
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
