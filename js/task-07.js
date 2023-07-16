const input = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

input.addEventListener("input", (event) => {
  textSpan.style.fontSize = `${event.currentTarget.value}px`;
});
