import { Racket } from "./Racket.js";

export class Player extends Racket
{
    updatePosition(y : number) {
        this.posY = y;
    }
}