/* product-manager.js
   Dynamic Product List Manager
   - Add products
   - Edit inline
   - Delete
   - Event delegation on <ul id="productList">
   - Auto-save when click outside edited item
*/

/* ======== Element refs ======== */
const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');
const emptyHint = document.getElementById('emptyHint');

/* ======== Internal State ========
   We keep a simple array of product objects so it's easier to manage IDs and future extension.
*/
let products = [];
let editingItemId = null; // id of the product currently in edit mode

/* ======== Helpers ======== */
function generateId() {
  return `p_${Date.now()}_${Math.floor(Math.random()*1000)}`;
}

function renderList() {
  productList.innerHTML = '';
  if (products.length === 0) {
    emptyHint.style.display = 'block';
    return;
  } else {
    emptyHint.style.display = 'none';
  }

  products.forEach(prod => {
    const li = document.createElement('li');
    li.className = 'product-item';
    li.dataset.id = prod.id;

    // left: product name (span) which can be switched to editable element
    const left = document.createElement('div');
    left.className = 'product-left';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'product-name';
    nameSpan.textContent = prod.name;
    nameSpan.setAttribute('title', 'Double-click to edit');

    // When in editing state, we will replace the span with an input dynamically
    left.appendChild(nameSpan);

    // controls
    const controls = document.createElement('div');
    controls.className = 'controls';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn edit';
    editBtn.type = 'button';
    editBtn.textContent = 'Edit';
    editBtn.dataset.action = 'edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn delete';
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.dataset.action = 'delete';

    controls.appendChild(editBtn);
    controls.appendChild(deleteBtn);

    li.appendChild(left);
    li.appendChild(controls);

    productList.appendChild(li);
  });
}

/* ======== Add product ======== */
function addProductFromInput() {
  const name = productInput.value.trim();
  if (!name) {
    productInput.focus();
    return;
  }

  const newProduct = {
    id: generateId(),
    name
  };

  products.push(newProduct);
  productInput.value = '';
  renderList();
}

/* Add button & Enter key */
addBtn.addEventListener('click', addProductFromInput);
productInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addProductFromInput();
});

/* ======== Event delegation for Edit / Delete (on the parent <ul>) ======== */
productList.addEventListener('click', (e) => {
  const action = e.target.dataset.action;
  if (!action) return;

  // Find the li (product item)
  const li = e.target.closest('li.product-item');
  if (!li) return;
  const id = li.dataset.id;

  if (action === 'delete') {
    products = products.filter(p => p.id !== id);
    // if deleted item was being edited, clear editing state
    if (editingItemId === id) editingItemId = null;
    renderList();
  }

  if (action === 'edit') {
    enterEditMode(id, li);
  }
});

/* ======== Double-click on name to edit (delegated) ======== */
productList.addEventListener('dblclick', (e) => {
  const nameSpan = e.target.closest('.product-name');
  if (!nameSpan) return;
  const li = nameSpan.closest('li.product-item');
  enterEditMode(li.dataset.id, li);
});

/* ======== Enter edit mode ======== */
function enterEditMode(id, liElement) {
  // If another item is in edit mode, save it first
  if (editingItemId && editingItemId !== id) {
    saveCurrentEdit(); // will clear editingItemId
  }

  // If already editing same item, focus input
  if (editingItemId === id) {
    const input = liElement.querySelector('input.edit-input');
    if (input) input.focus();
    return;
  }

  // Set editing id
  editingItemId = id;

  // Replace span with an input for inline editing
  const nameSpan = liElement.querySelector('.product-name');
  const currentText = nameSpan.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'edit-input editing';
  input.value = currentText;
  input.setAttribute('aria-label', 'Edit product name');

  // Replace element in DOM
  nameSpan.replaceWith(input);
  input.focus();
  // place cursor at end
  input.selectionStart = input.selectionEnd = input.value.length;

  // handle Enter to save and Escape to cancel
  function onKey(e) {
    if (e.key === 'Enter') {
      saveEdit(id, input.value.trim());
    } else if (e.key === 'Escape') {
      cancelEdit(id);
    }
  }

  input.addEventListener('keydown', onKey);

  // store a reference so saveCurrentEdit can access it
  liElement._editing = { input, onKey };
}

/* ======== Save current edit if any ======== */
function saveCurrentEdit() {
  if (!editingItemId) return;

  const li = productList.querySelector(`li[data-id="${editingItemId}"]`);
  if (!li || !li._editing) {
    editingItemId = null;
    return;
  }
  const { input } = li._editing;
  saveEdit(editingItemId, input.value.trim());
}

/* ======== Save edit for a particular id ======== */
function saveEdit(id, newValue) {
  const li = productList.querySelector(`li[data-id="${id}"]`);
  if (!li || !li._editing) {
    editingItemId = null;
    return;
  }

  const { input, onKey } = li._editing;

  // remove key listener
  input.removeEventListener('keydown', onKey);

  // If empty string -> keep previous name (no empty product names)
  if (!newValue) {
    // restore previous text from products array
    const existing = products.find(p => p.id === id);
    newValue = existing ? existing.name : '';
  }

  // update state
  products = products.map(p => (p.id === id ? { ...p, name: newValue } : p));

  // replace input with span
  const span = document.createElement('span');
  span.className = 'product-name';
  span.textContent = newValue;
  span.setAttribute('title', 'Double-click to edit');

  input.replaceWith(span);

  // cleanup
  delete li._editing;
  editingItemId = null;
}

/* ======== Cancel edit (restore original) ======== */
function cancelEdit(id) {
  const li = productList.querySelector(`li[data-id="${id}"]`);
  if (!li || !li._editing) {
    editingItemId = null;
    return;
  }
  const { input, onKey } = li._editing;
  input.removeEventListener('keydown', onKey);

  const original = products.find(p => p.id === id);
  const span = document.createElement('span');
  span.className = 'product-name';
  span.textContent = original ? original.name : '';
  span.setAttribute('title', 'Double-click to edit');

  input.replaceWith(span);

  delete li._editing;
  editingItemId = null;
}

/* ======== Auto-save when clicking outside the edited input ========
   Use capture phase on document so clicks are detected early.
*/
document.addEventListener('click', (e) => {
  // If nothing is being edited, do nothing
  if (!editingItemId) return;

  const li = productList.querySelector(`li[data-id="${editingItemId}"]`);
  if (!li) {
    editingItemId = null;
    return;
  }

  // If click is inside the current editing li, do nothing
  if (li.contains(e.target)) {
    return;
  }

  // Click is outside: save current edit
  saveCurrentEdit();
}, true); // capture=true

/* ======== Initialize with a few sample products ======== */
function seedSampleData() {
  products = [
    { id: generateId(), name: 'Apple iPhone case' },
    { id: generateId(), name: 'Wireless Mouse' },
    { id: generateId(), name: 'Notebook (A4)' }
  ];
  renderList();
}

/* ======== On load ======== */
seedSampleData();
