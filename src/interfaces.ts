export interface GameObject {
    draw(ctx : CanvasRenderingContext2D) : void;
}

export interface MovableObject extends GameObject {
    speedY : number,
    speedX : number
}