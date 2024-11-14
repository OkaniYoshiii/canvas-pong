import { MovableObject } from "../../interfaces";
import { Rect } from "../../types";

export class Racket implements MovableObject
{
    protected posX : number;
    protected posY : number;
    protected width : number;
    protected heigth : number;

    speedX : number;
    speedY : number;

    protected speed : number;
    constructor(posX : number, posY : number, width : number, height : number, speed : number) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.heigth = height;
        this.speed = speed;

        this.speedX = speed,
        this.speedY = speed;
    }

    moveUp(ctx : CanvasRenderingContext2D) : void {
        if(this.posY - this.speed < 0) {
            this.posY = 0;
            return;
        } 

        this.posY -= this.speed;
    }

    moveDown(ctx : CanvasRenderingContext2D) : void {
        if(this.posY + this.heigth + this.speed > ctx.canvas.height) {
            this.posY = ctx.canvas.height - this.heigth;
            return;
        } 

        this.posY += this.speed;
    }

    getRect() : Rect {
        return {
            posX : this.posX,
            posY : this.posY,
            width : this.width,
            height : this.heigth
        };
    }

    draw(ctx : CanvasRenderingContext2D) : void {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.posX, this.posY, this.width, this.heigth);
    }
}