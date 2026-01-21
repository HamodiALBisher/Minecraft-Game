import { TILE, TOOL_RULES } from "./constants.js";
import { addToInventory, hasInInventory, removeFromInventory } from "./inventory.js";
import { setTile } from "./world.js";

export function canRemove(tileType, selectedTool) {
  if (!selectedTool) return false;
  return TOOL_RULES[selectedTool] === tileType;
}

export function onWorldTileClick({ world, x, y, selectedTool, inventory, selectedInvType }) {
  const currentType = world[y][x];

  if (selectedInvType) {
    if (!hasInInventory(inventory, selectedInvType)) return;
    setTile(world, x, y, selectedInvType);
    removeFromInventory(inventory, selectedInvType);
    return;
  }

  if (canRemove(currentType, selectedTool)) {
    setTile(world, x, y, TILE.EMPTY);
    addToInventory(inventory, currentType);
  }
}
