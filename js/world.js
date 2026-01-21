import { TILE, WORLD_COLS } from "./constants.js";

export function createInitialWorld() {
  const rows = 12;
  const cols = WORLD_COLS;

  const world = Array.from({ length: rows }, () => Array(cols).fill(TILE.EMPTY));

  for (let y = 8; y < rows; y++) {
    for (let x = 0; x < cols; x++) world[y][x] = TILE.DIRT;
  }

  for (let x = 0; x < cols; x++) world[7][x] = TILE.GRASS;

  place(world, 12, 6, TILE.ROCK);
  place(world, 14, 6, TILE.ROCK);
  place(world, 2, 6, TILE.ROCK);

  place(world, 6, 6, TILE.TREE);
  place(world, 7, 6, TILE.TREE);
  place(world, 16, 6, TILE.TREE);

  return world;
}

function place(world, x, y, type) {
  if (!world[y]) return;
  if (world[y][x] === undefined) return;
  world[y][x] = type;
}

export function renderWorld(world, worldEl) {
  worldEl.innerHTML = "";

  for (let y = 0; y < world.length; y++) {
    for (let x = 0; x < world[y].length; x++) {
      const type = world[y][x];
      const el = document.createElement("div");
      el.className = `tile ${type}`;
      el.dataset.x = String(x);
      el.dataset.y = String(y);
      worldEl.appendChild(el);
    }
  }
}

export function setTile(world, x, y, type) {
  world[y][x] = type;
}
