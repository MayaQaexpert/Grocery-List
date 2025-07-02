const listElement = document.getElementById("groceryList");
const inputElement = document.getElementById("itemInput");

let items = JSON.parse(localStorage.getItem("groceryItems")) || [];

function renderList() {
  listElement.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = item.checked ? "checked" : "";
    li.innerHTML = `
      <label style="flex:1; display: flex; align-items: center;">
        <input type="checkbox" ${item.checked ? "checked" : ""} onclick="toggleChecked(${index})" />
        <span style="margin-left: 8px;">${item.text}</span>
      </label>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    listElement.appendChild(li);
  });
}

function addItem() {
  const text = inputElement.value.trim();
  if (text) {
    items.push({ text, checked: false });
    inputElement.value = "";
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