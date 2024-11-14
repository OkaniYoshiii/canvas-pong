import { startGameLoop } from "./modules/loop.js";
import { Racket } from "./modules/classes/Racket.js";
import { Ball } from "./modules/classes/Ball.js";
import { Player } from "./modules/classes/Player.js";
const CANVAS = document.querySelector('#canvas');
const CTX = CANVAS === null || CANVAS === void 0 ? void 0 : CANVAS.getContext('2d', { alpha: false });
if (CANVAS instanceof HTMLCanvasElement && CTX instanceof CanvasRenderingContext2D) {
    startGameLoop(setup, update, { '2dContext': CTX, 'canvas': CANVAS, 'FPS': 30 });
}
function update(canvas, ctx, constants, gameObjects) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameObjects.racket.draw(ctx);
    gameObjects.player.draw(ctx);
    gameObjects.ball.draw(ctx);
    gameObjects.ball.update();
    ctx.lineWidth = 2;
    // Debug
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    // Borders
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = constants.borderWidth * 2;
    ctx.strokeStyle = "blue";
    ctx.stroke();
}
function setup(canvas, ctx) {
    canvas.width = 500;
    canvas.height = 500;
    const BORDER_WIDTH = 25;
    const WORLD = {
        posX: BORDER_WIDTH,
        posY: BORDER_WIDTH,
        width: canvas.width - BORDER_WIDTH * 2,
        height: canvas.height - BORDER_WIDTH * 2,
    };
    const RADIUS = 6;
    const BALL = new Ball(Math.round(canvas.width / 2) + 100, Math.round(canvas.height / 2), RADIUS, 5, WORLD);
    const OFFSET = 15;
    const WIDTH = 10;
    const HEIGHT = 50;
    const PLAYER = new Player(BORDER_WIDTH + OFFSET, BORDER_WIDTH + OFFSET, WIDTH, HEIGHT, 10);
    const RACKET = new Racket(canvas.width - BORDER_WIDTH - WIDTH - OFFSET, 0 + BORDER_WIDTH + OFFSET, WIDTH, HEIGHT, 10);
    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowUp') {
            RACKET.moveUp(ctx);
        }
        if (ev.key === 'ArrowDown') {
            RACKET.moveDown(ctx);
        }
    });
    canvas.addEventListener('mousemove', (ev) => {
        // BALL.updatePosition(ev.offsetX, ev.offsetY);
        // PLAYER.updatePosition(ev.offsetY);
    });
    return {
        constants: {
            borderWidth: BORDER_WIDTH,
            worldRect: WORLD
        },
        gameObjects: {
            racket: RACKET,
            player: PLAYER,
            ball: BALL,
        }
    };
}
