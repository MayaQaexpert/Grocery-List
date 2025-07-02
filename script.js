const listElement = document.getElementById("groceryList");
const inputElement = document.getElementById("itemInput");

const quantityElement = document.getElementById("quantityInput");
const unitElement = document.getElementById("unitInput");
const dateElement = document.getElementById("dateInput");

let items = JSON.parse(localStorage.getItem("groceryItems")) || [];

function renderList() {
  listElement.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = item.checked ? "checked" : "";
    li.innerHTML = `
      <label style="flex:1; display: flex; align-items: center; gap: 10px;">
        <input type="checkbox" ${item.checked ? "checked" : ""} onclick="toggleChecked(${index})" />
        <span style="margin-left: 8px; font-weight: bold;">${item.text}</span>
        <span style="color: #555;">Qty: ${item.quantity} ${item.unit || ''}</span>
        <span style="color: #888; font-size: 0.95em;">${item.date ? `Date: ${item.date}` : ''}</span>
      </label>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    listElement.appendChild(li);
  });
}

function addItem() {
  const text = inputElement.value.trim();
  const quantity = quantityElement.value.trim() || 1;
  const unit = unitElement.value;
  const date = dateElement.value;
  if (text) {
    items.push({ text, quantity, unit, date, checked: false });
    inputElement.value = "";
    quantityElement.value = "";
    unitElement.value = "pcs";
    dateElement.value = "";
    saveAndRender();
  }
}

function removeItem(index) {
  items.splice(index, 1);
  saveAndRender();
}

function toggleChecked(index) {
  items[index].checked = !items[index].checked;
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("groceryItems", JSON.stringify(items));
  renderList();
}

renderList();