export function startGameLoop(setupCallback, updateCallback, options) {
    var _a;
    const FPS = (_a = options.FPS) !== null && _a !== void 0 ? _a : 60;
    const DELTA_TIME = 1 / FPS * 1000;
    const SETUP_DATA = setupCallback(options.canvas, options["2dContext"]);
    // let lastTimestamp = 0;
    let cumulatedTime = 0;
    let lastTimestamp;
    let frames = 0;
    function loop(timestamp) {
        if (lastTimestamp === undefined) {
            lastTimestamp = timestamp - DELTA_TIME;
        }
        cumulatedTime += timestamp - lastTimestamp;
        if (cumulatedTime >= DELTA_TIME) {
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
