let employees = [];
let idCounter = 1;

const form = document.getElementById('employeeForm');
const table = document.getElementById('employeeTable');
const idInput = document.getElementById('employeeId');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const gender = form.gender.value;
  const position = document.getElementById('position').value;
  const note = document.getElementById('note').value.trim();

  if (!name || !age || !gender || !position) return;

  if (idInput.value) {
    const id = parseInt(idInput.value);
    const emp = employees.find(emp => emp.id === id);
    if (emp) {
      emp.name = name;
      emp.age = age;
      emp.gender = gender;
      emp.position = position;
      emp.note = note;
    }
  } else {
    // Add new
    const newEmployee = {
      id: Date.now(),
      name,
      age,
      gender,
      position,
      note
    };
    employees.push(newEmployee);
  }

  form.reset();
  idInput.value = '';
  renderTable();
});

function renderTable() {
  table.innerHTML = '';
  employees.forEach((emp, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.gender}</td>
      <td>${emp.position}</td>
      <td>${emp.note}</td>
      <td>
        <button class="edit" onclick="editEmployee(${emp.id})">Sửa</button>
        <button class="delete" onclick="deleteEmployee(${emp.id})">Xoá</button>
      </td>
    `;
    table.appendChild(row);
  });
}

function editEmployee(id) {
  const emp = employees.find(e => e.id === id);
  if (emp) {
    document.getElementById('employeeId').value = emp.id;
    document.getElementById('name').value = emp.name;
    document.getElementById('age').value = emp.age;
    document.querySelector(`input[name="gender"][value="${emp.gender}"]`).checked = true;
    document.getElementById('position').value = emp.position;
    document.getElementById('note').value = emp.note;
  }
}

function deleteEmployee(id) {
  if (confirm("Bạn có chắc muốn xoá nhân viên này không?")) {
    employees = employees.filter(e => e.id !== id);
    renderTable();
  }
}
