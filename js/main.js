import { createInitialWorld, renderWorld } from "./world.js";
import { createInventory, renderInventory } from "./inventory.js";
import { highlightSelectedTool } from "./tools.js";
import { onWorldTileClick } from "./events.js";

const landingEl = document.getElementById("landing");
const gameEl = document.getElementById("game");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const clearSelectionBtn = document.getElementById("clearSelectionBtn");

const worldEl = document.getElementById("world");
const inventoryEl = document.getElementById("inventory");
const toolsContainerEl = document.querySelector(".tools");

let world = createInitialWorld();
const initialWorldSnapshot = JSON.stringify(world);

let selectedTool = null;
let inventory = createInventory();
let selectedInvType = null;

function renderAll() {
  renderWorld(world, worldEl);
  renderInventory(inventory, inventoryEl, selectedInvType);
  highlightSelectedTool(toolsContainerEl, selectedTool);
}

function startGame() {
  landingEl.classList.add("hidden");
  gameEl.classList.remove("hidden");
  renderAll();
}

startBtn.addEventListener("click", startGame);

resetBtn.addEventListener("click", () => {
  world = JSON.parse(initialWorldSnapshot);
  inventory = createInventory();
  selectedTool = null;
  selectedInvType = null;
  renderAll();
});

clearSelectionBtn.addEventListener("click", () => {
  selectedTool = null;
  selectedInvType = null;
  renderAll();
});

toolsContainerEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".tool");
  if (!btn) return;
  selectedTool = btn.dataset.tool;
  selectedInvType = null;
  renderAll();
});

inventoryEl.addEventListener("click", (e) => {
  const item = e.target.closest(".inv-item");
  if (!item) return;
  const type = item.dataset.type;
  if (!type) return;
  selectedInvType = selectedInvType === type ? null : type;
  selectedTool = null;
  renderAll();
});

worldEl.addEventListener("click", (e) => {
  const tile = e.target.closest(".tile");
  if (!tile) return;
  const x = Number(tile.dataset.x);
  const y = Number(tile.dataset.y);
  onWorldTileClick({ world, x, y, selectedTool, inventory, selectedInvType });
  renderAll();
});
