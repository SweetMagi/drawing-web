const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let startX = 0, startY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  startX = e.offsetX;
  startY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  const currentX = e.offsetX;
  const currentY = e.offsetY;

  // 描画を一旦リセットして再描画
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAllRectangles();
  drawRect(startX, startY, currentX - startX, currentY - startY);
});

canvas.addEventListener('mouseup', (e) => {
  if (!isDrawing) return;
  isDrawing = false;
  const w = e.offsetX - startX;
  const h = e.offsetY - startY;
  rectangles.push({ x: startX, y: startY, w, h });
});

const rectangles = [];

function drawRect(x, y, w, h) {
  ctx.strokeStyle = 'blue';
  ctx.strokeRect(x, y, w, h);
}

function drawAllRectangles() {
  rectangles.forEach(r => drawRect(r.x, r.y, r.w, r.h));
}
