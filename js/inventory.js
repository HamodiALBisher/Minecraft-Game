export function createInventory() {
  return {};
}

export function addToInventory(inventory, tileType) {
  inventory[tileType] = (inventory[tileType] || 0) + 1;
}

export function hasInInventory(inventory, tileType) {
  return (inventory[tileType] || 0) > 0;
}

export function removeFromInventory(inventory, tileType) {
  if (!hasInInventory(inventory, tileType)) return false;
  inventory[tileType] -= 1;
  if (inventory[tileType] === 0) delete inventory[tileType];
  return true;
}

export function renderInventory(inventory, inventoryEl, selectedInvType) {
  inventoryEl.innerHTML = "";

  const types = Object.keys(inventory);
  if (types.length === 0) {
    const empty = document.createElement("div");
    empty.className = "inv-item";
    empty.textContent = "(empty)";
    inventoryEl.appendChild(empty);
    return;
  }

  for (const type of types) {
    const item = document.createElement("button");
    item.className = "inv-item";
    item.dataset.type = type;
    item.innerHTML = `<div>${type}</div><span class="inv-count">x${inventory[type]}</span>`;
    item.classList.toggle("active", type === selectedInvType);
    inventoryEl.appendChild(item);
  }
}
