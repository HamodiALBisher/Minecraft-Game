export const TILE = {
  GRASS: "grass",
  DIRT: "dirt",
  ROCK: "rock",
  TREE: "tree",
  EMPTY: "empty",
};

export const TOOL = {
  AXE: "axe",
  PICKAXE: "pickaxe",
  SHOVEL: "shovel",
};

export const TOOL_RULES = {
  [TOOL.AXE]: TILE.TREE,
  [TOOL.PICKAXE]: TILE.ROCK,
  [TOOL.SHOVEL]: TILE.DIRT,
};

export const WORLD_COLS = 20;
