export class Racket {
    constructor(posX, posY, width, height, speed) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.heigth = height;
        this.speed = speed;
        this.speedX = speed,
            this.speedY = speed;
    }
    moveUp(ctx) {
        if (this.posY - this.speed < 0) {
            this.posY = 0;
            return;
        }
        this.posY -= this.speed;
    }
    moveDown(ctx) {
        if (this.posY + this.heigth + this.speed > ctx.canvas.height) {
            this.posY = ctx.canvas.height - this.heigth;
            return;
        }
        this.posY += this.speed;
    }
    getRect() {
        return {
            posX: this.posX,
            posY: this.posY,
            width: this.width,
            height: this.heigth
        };
    }
    draw(ctx) {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.posX, this.posY, this.width, this.heigth);
    }
}
