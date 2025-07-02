import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Grocery List App", layout="centered")
st.title("Grocery List Web App")
st.write("This is a simple grocery list app built with HTML, CSS, and JavaScript.")

with open("index.html", "r") as f:
    html_content = f.read()
with open("script.css", "r") as f:
    css_content = f.read()
with open("script.js", "r") as f:
    js_content = f.read()

# Combine HTML, CSS, and JS
full_html = f"""
<style>{css_content}</style>
{html_content}
<script>{js_content}</script>
"""

components.html(full_html, height=700, scrolling=True)
