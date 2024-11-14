import { GameObject } from "./interfaces";

export type GameLoopConfig = {
    'FPS'? : number,
    'canvas' : HTMLCanvasElement,
    '2dContext' : CanvasRenderingContext2D
}

export type ShapeEdge = 'top' | 'right' | 'bottom' | 'left' | null;

export type GameLoopSetup = (canvas : HTMLCanvasElement, ctx : CanvasRenderingContext2D) => {
    constants : {
        [key : string] : any
    },
    gameObjects : {
        [key : string] : GameObject | GameObject[]
    }
};

export type GameLoopUpdate = (canvas : HTMLCanvasElement, ctx : CanvasRenderingContext2D, constants : any, gameObjects : any) => void

export type Rect = { posX : number, posY : number, width : number, height : number };