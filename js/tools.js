export function highlightSelectedTool(containerEl, selectedTool) {
  const buttons = containerEl.querySelectorAll(".tool");
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tool === selectedTool);
  });
}
