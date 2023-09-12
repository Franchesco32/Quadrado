// Cria um contexto 2D para o elemento `canvas`.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Define a cor do quadrado.
ctx.fillStyle = "red";

// Desenha o quadrado.
ctx.fillRect(0, 0, 100, 100);
