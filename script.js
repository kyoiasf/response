const trigger = document.querySelector(".corner-trigger");
const noteAspectRatio = 290 / 365;

trigger.addEventListener("click", () => {
  const maxWidth = Math.min(220, window.innerWidth * 0.3, window.innerHeight * 0.55 * noteAspectRatio);
  const minWidth = Math.min(80, maxWidth);
  const width = minWidth + Math.random() * (maxWidth - minWidth);
  const height = width / noteAspectRatio;
  const note = document.createElement("img");

  note.className = "note-popout";
  note.src = "note.png";
  note.alt = "";
  note.style.width = `${width}px`;
  note.style.left = `${Math.random() * Math.max(0, window.innerWidth - width)}px`;
  note.style.top = `${Math.random() * Math.max(0, window.innerHeight - height)}px`;
  document.body.append(note);
});