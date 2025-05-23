
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const sprite = new Image();
sprite.src = 'Rowlet-Sheet.png';

const frameWidth = 100;
const frameHeight = 100;
const totalFrames = 10;
let currentFrame = 0;
const fps = 10;
const frameDuration = 1000 / fps;
let lastFrameTime = 0;

function gameLoop(timestamp) {
  if (timestamp - lastFrameTime >= frameDuration) {
    currentFrame = (currentFrame + 1) % totalFrames;
    lastFrameTime = timestamp;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const x = (canvas.width - frameWidth) / 2;
  const y = (canvas.height - frameHeight) / 2;

  ctx.drawImage(
    sprite,
    currentFrame * frameWidth,
    0,
    frameWidth,
    frameHeight,
    x,
    y,
    frameWidth,
    frameHeight
  );

  requestAnimationFrame(gameLoop);
}

sprite.onload = () => {
  requestAnimationFrame(gameLoop);
};
