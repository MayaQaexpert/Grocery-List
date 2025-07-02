# Grocery-List

## Overview
This is a simple web-based Grocery List application. You can add, view, and manage your grocery items easily. The app is built with HTML, CSS, and JavaScript.

## Features
- Add grocery items
- Remove items from the list
- Mark items as completed
- Responsive and easy to use


## Project File Overview

- `index.html`: Main HTML file for the Grocery List web app. Contains the structure of the app and links to the CSS and JS files.
- `script.css`: Stylesheet for the app. Provides modern, responsive, and visually appealing styles for all UI elements.
- `script.js`: JavaScript logic for the app. Handles adding, removing, checking items, saving to local storage, and rendering the list. Supports quantity, unit (pcs/kg/liter), and date for each item.
- `app.py`: Streamlit wrapper to run the web app as a Python/Streamlit application. Embeds the HTML, CSS, and JS into a Streamlit component.
- `groceryList.test.js`: Unit tests for the core logic (add, remove, check, persist items) using Jest.
- `README.md`: Project documentation and usage guide.

## Usage Guide
### Web Version
1. Open `index.html` in your browser.
2. Enter the item name, quantity, select unit (pcs/kg/liter), and optionally a date.
3. Click 'Add' to add the item to your grocery list.
4. Click the checkbox to mark items as completed, or 'Remove' to delete them.
5. Your list is saved in your browser (local storage).

### Streamlit Version
1. Make sure you have Python and Streamlit installed.
2. Run `streamlit run app.py` in your terminal.
3. The app will open in your browser with the same features as the web version.

### Testing
1. (Requires Node.js and Jest) Run `jest groceryList.test.js` to execute unit tests for the core logic.

## Running as a Streamlit App
To run this application as a Streamlit app, you need to create a Python file (e.g., `app.py`) that serves the HTML/JS/CSS using Streamlit's components. See below for a sample `app.py`.

### 1. Install Streamlit
```bash
pip install streamlit streamlit-components
```

### 2. Create `app.py`
See the provided `app.py` sample in this repository.

### 3. Run the App
```bash
streamlit run app.py
```

---
Feel free to contribute or suggest improvements!