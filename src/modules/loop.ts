import { GameLoopSetup, GameLoopUpdate, GameLoopConfig } from "../types";

export function startGameLoop(setupCallback : GameLoopSetup, updateCallback : GameLoopUpdate, options : GameLoopConfig) {
    const FPS = options.FPS ?? 60;
    const DELTA_TIME = 1 / FPS * 1000;

    const SETUP_DATA = setupCallback(options.canvas, options["2dContext"]);

    // let lastTimestamp = 0;
    let cumulatedTime = 0;
    let lastTimestamp : number;
    let frames = 0;
    function loop(timestamp : number) {
        if(lastTimestamp === undefined) {
            lastTimestamp = timestamp - DELTA_TIME;
        }

        cumulatedTime += timestamp - lastTimestamp;
        if(cumulatedTime >= DELTA_TIME) {
            updateCallback(options.canvas, options["2dContext"], SETUP_DATA.constants, SETUP_DATA.gameObjects);
            cumulatedTime -= DELTA_TIME;
            frames++;
        }

        lastTimestamp = timestamp;
        requestAnimationFrame(loop);
    }

    setTimeout(() => {
        console.log(frames);
    }, 1000);

    requestAnimationFrame(loop);
}
