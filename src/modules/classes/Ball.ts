import { MovableObject } from "../../interfaces";
import { Rect, ShapeEdge } from "../../types";

export class Ball implements MovableObject
{
    #posX : number;
    #posY : number;
    #radius : number;

    speedX : number;
    speedY : number;
    speed : number;

    world : Rect;

    constructor(posX : number, posY : number, radius : number, speed : number, world : Rect) {
        this.#posX = posX;
        this.#posY = posY;
        this.#radius = radius;
        this.speedX = speed,
        this.speedY = speed;
        this.speed = speed;

        this.world = world;
    }

    updatePosition(x : number, y : number) {
        this.#posX = x;
        this.#posY = y;
    }

    update() {
        if(this.collidesWithWorldEdge('right')) this.speedX *= -1;
        if(this.collidesWithWorldEdge('left')) this.speedX *= -1;
        if(this.collidesWithWorldEdge('top')) this.speedY *= -1;
        if(this.collidesWithWorldEdge('bottom')) this.speedY *= -1;

        this.#posX += this.speedX;
        this.#posY += this.speedY;
    }

    collidesWithWorldEdge(edge : ShapeEdge) : boolean {
        if(edge === 'right') {
            return (this.#posX + this.speedX > this.world.posX + this.world.width - this.#radius);
        }

        if(edge === 'left') {
            return (this.#posX + this.speedX < this.world.posX + this.#radius);
        }

        if(edge === 'bottom') {
            return (this.#posY + this.speedY > this.world.posY + this.world.height - this.#radius);
        }

        if(edge === 'top') {
            return (this.#posY + this.speedY < this.world.posY + this.#radius);
        }

        return false;
    }

    draw(ctx : CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.#posX, this.#posY, this.#radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.fill();
    }
}