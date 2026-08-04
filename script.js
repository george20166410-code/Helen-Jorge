const btn = document.getElementById("loveButton");
const letter = document.getElementById("letter");

btn.addEventListener("click", () => {
  if (letter.style.display === "block") {
    letter.style.display = "none";
    btn.textContent = "💌 Abrir mi carta";
  } else {
    letter.style.display = "block";
    btn.textContent = "❤️ Cerrar carta";
  }
});

function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (18 + Math.random() * 28) + "px";
  h.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(h);

  setTimeout(() => {
    h.remove();
  }, 10000);
}

setInterval(createHeart, 350);

const cube = document.querySelector(".cube");

let rx = -15;
let ry = 0;

let dragging = false;
let startX = 0;
let startY = 0;

function updateCube() {
  cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
}

const scene = document.querySelector(".scene");

scene.addEventListener("pointerdown", (e) => {
  dragging = true;
  startX = e.clientX;
  startY = e.clientY;
  cube.style.animation = "none";
});

window.addEventListener("pointermove", (e) => {
  if (!dragging) return;

  ry += (e.clientX - startX) * 0.4;
  rx -= (e.clientY - startY) * 0.4;

  startX = e.clientX;
  startY = e.clientY;

  updateCube();
});

window.addEventListener("pointerup", () => {
  dragging = false;
});