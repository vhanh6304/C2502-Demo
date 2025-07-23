const students = [];

students.push("An", "Bình", "Chi");

const idx = students.indexOf("Bình");
if (idx !== -1) {
  students.splice(idx, 1);
}

students.unshift("Dũng");

console.log("Danh sách cuối cùng:", students);

const listEl = document.getElementById("student-list");
students.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  listEl.appendChild(li);
});
