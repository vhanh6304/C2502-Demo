let students = [];
let editingIndex = -1;

function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const className = document.getElementById("className").value;

  if (!name || !age || !className) return alert("Chưa nhập đầy đủ thông tin");

  const student = { name, age, className };

  if (editingIndex === -1) {
    students.push(student);
  } else {
    students[editingIndex] = student;
    editingIndex = -1;
  }

  resetForm();
  renderStudents();
}

function renderStudents() {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";
  students.forEach((s, i) => {
    const row = `
      <tr>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.className}</td>
        <td>
          <button onclick="editStudent(${i})">Sửa</button>
          <button onclick="deleteStudent(${i})">Xóa</button>
        </td>
      </tr>`;
    tbody.innerHTML += row;
  });
}

function editStudent(index) {
  const s = students[index];
  document.getElementById("name").value = s.name;
  document.getElementById("age").value = s.age;
  document.getElementById("className").value = s.className;
  editingIndex = index;
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderStudents();
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("className").value = "";
}
