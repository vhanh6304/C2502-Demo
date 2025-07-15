let count = 0;
const cBtn = document.getElementById("countBtn");
const res = document.getElementById("result");

cBtn.addEventListener("click", () => {
    count++;
    res.textContent = "Số lần: " + count;
});

const sBtn = document.getElementById("saveBtn");
const dBtn = document.getElementById("deleteBtn");

sBtn.addEventListener("click", () => {
    localStorage.setItem("count", count);
});

dBtn.addEventListener("click", () => {
    localStorage.removeItem("count");
});

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value;
    if (!task) return;

    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("button");
    btn.textContent = "delete";
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function toggleLightDark() {
    document.body.classList.toggle("dark-mode");
}
