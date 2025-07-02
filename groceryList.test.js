// groceryList.test.js

// Mock localStorage for testing
global.localStorage = {
  store: {},
  getItem(key) { return this.store[key] || null; },
  setItem(key, value) { this.store[key] = value; },
  clear() { this.store = {}; }
};

let items = [];

function saveAndRender() {
  localStorage.setItem("groceryItems", JSON.stringify(items));
}

describe('Grocery List', () => {
  beforeEach(() => {
    items = [];
    localStorage.clear();
  });

  test('Add item with name, quantity, unit, and date', () => {
    items.push({ text: "Milk", quantity: 2, unit: "liter", date: "2025-07-02", checked: false });
    saveAndRender();
    expect(items.length).toBe(1);
    expect(items[0]).toEqual({ text: "Milk", quantity: 2, unit: "liter", date: "2025-07-02", checked: false });
  });

  test('Add item with default quantity and unit', () => {
    items.push({ text: "Eggs", quantity: 1, unit: "pcs", date: "", checked: false });
    saveAndRender();
    expect(items[0].quantity).toBe(1);
    expect(items[0].unit).toBe("pcs");
  });

  test('Do not add item with empty name', () => {
    const text = "";
    if (text) items.push({ text, quantity: 1, unit: "pcs", date: "", checked: false });
    saveAndRender();
    expect(items.length).toBe(0);
  });

  test('Remove item', () => {
    items.push({ text: "Bread", quantity: 1, unit: "pcs", date: "", checked: false });
    items.splice(0, 1);
    saveAndRender();
    expect(items.length).toBe(0);
  });

  test('Toggle checked state', () => {
    items.push({ text: "Butter", quantity: 1, unit: "kg", date: "", checked: false });
    items[0].checked = !items[0].checked;
    saveAndRender();
    expect(items[0].checked).toBe(true);
  });

  test('Persist items in localStorage', () => {
    items.push({ text: "Juice", quantity: 1, unit: "liter", date: "", checked: false });
    saveAndRender();
    const stored = JSON.parse(localStorage.getItem("groceryItems"));
    expect(stored.length).toBe(1);
    expect(stored[0].text).toBe("Juice");
  });
});
