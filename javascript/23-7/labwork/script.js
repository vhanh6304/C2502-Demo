
let categories = JSON.parse(localStorage.getItem('categories')) || [];
let products = JSON.parse(localStorage.getItem('products')) || [];

function saveCategories() {
  localStorage.setItem('categories', JSON.stringify(categories));
}

function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
}



const categoryForm = document.getElementById('categoryForm');
const categoryList = document.getElementById('categoryList');

if (categoryForm) {
  categoryForm.onsubmit = function (e) {
    e.preventDefault();
    const id = document.getElementById('categoryId').value;
    const name = document.getElementById('categoryName').value.trim();
    const quantity = parseInt(document.getElementById('categoryQuantity').value);

    if (!name || quantity < 0) return;

    if (id) {
      const category = categories.find(c => c.id == id);
      category.name = name;
      category.quantity = quantity;
    } else {
      categories.push({ id: Date.now(), name, quantity });
    }

    saveCategories();
    categoryForm.reset();
    renderCategoryList();
  };
}

function renderCategoryList() {
  if (!categoryList) return;
  categoryList.innerHTML = '';
  categories.forEach(cat => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${cat.name}</td>
      <td>${cat.quantity}</td>
      <td>
        <button onclick="editCategory(${cat.id})">Sửa</button>
        <button onclick="deleteCategory(${cat.id})">Xoá</button>
      </td>`;
    categoryList.appendChild(row);
  });
}

function editCategory(id) {
  const cat = categories.find(c => c.id == id);
  document.getElementById('categoryId').value = cat.id;
  document.getElementById('categoryName').value = cat.name;
  document.getElementById('categoryQuantity').value = cat.quantity;
}

function deleteCategory(id) {
  categories = categories.filter(c => c.id !== id);
  saveCategories();
  renderCategoryList();
}



const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
const categorySelect = document.getElementById('productCategory');

if (productForm) {
  renderCategoryOptions();

  productForm.onsubmit = function (e) {
    e.preventDefault();
    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = document.getElementById('productCategory').value;
    const description = document.getElementById('productDescription').value.trim();

    if (!name || price <= 0 || !category) return;

    if (id) {
      const product = products.find(p => p.id == id);
      product.name = name;
      product.price = price;
      product.category = category;
      product.description = description;
    } else {
      products.push({ id: Date.now(), name, price, category, description });
    }

    saveProducts();
    productForm.reset();
    renderProductList();
  };
}

function renderProductList() {
  if (!productList) return;
  productList.innerHTML = '';
  products.forEach(p => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${p.name}</td>
      <td>${p.price}</td>
      <td>${p.category}</td>
      <td>${p.description}</td>
      <td>
        <button onclick="editProduct(${p.id})">Sửa</button>
        <button onclick="deleteProduct(${p.id})">Xoá</button>
      </td>`;
    productList.appendChild(row);
  });
}

function editProduct(id) {
  const p = products.find(p => p.id == id);
  document.getElementById('productId').value = p.id;
  document.getElementById('productName').value = p.name;
  document.getElementById('productPrice').value = p.price;
  document.getElementById('productCategory').value = p.category;
  document.getElementById('productDescription').value = p.description;
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveProducts();
  renderProductList();
}



function renderCategoryOptions() {
  if (!categorySelect) return;
  categorySelect.innerHTML = '';

  
  categories = JSON.parse(localStorage.getItem('categories')) || [];

  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.name;
    option.textContent = cat.name;
    categorySelect.appendChild(option);
  });
}
