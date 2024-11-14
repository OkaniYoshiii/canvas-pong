import { Racket } from "./Racket.js";
export class Player extends Racket {
    updatePosition(y) {
        this.posY = y;
    }
}
