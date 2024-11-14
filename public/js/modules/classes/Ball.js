var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ball_posX, _Ball_posY, _Ball_radius;
export class Ball {
    constructor(posX, posY, radius, speed, world) {
        _Ball_posX.set(this, void 0);
        _Ball_posY.set(this, void 0);
        _Ball_radius.set(this, void 0);
        __classPrivateFieldSet(this, _Ball_posX, posX, "f");
        __classPrivateFieldSet(this, _Ball_posY, posY, "f");
        __classPrivateFieldSet(this, _Ball_radius, radius, "f");
        this.speedX = speed,
            this.speedY = speed;
        this.speed = speed;
        this.world = world;
    }
    updatePosition(x, y) {
        __classPrivateFieldSet(this, _Ball_posX, x, "f");
        __classPrivateFieldSet(this, _Ball_posY, y, "f");
    }
    update() {
        if (this.collidesWithWorldEdge('right'))
            this.speedX *= -1;
        if (this.collidesWithWorldEdge('left'))
            this.speedX *= -1;
        if (this.collidesWithWorldEdge('top'))
            this.speedY *= -1;
        if (this.collidesWithWorldEdge('bottom'))
            this.speedY *= -1;
        __classPrivateFieldSet(this, _Ball_posX, __classPrivateFieldGet(this, _Ball_posX, "f") + this.speedX, "f");
        __classPrivateFieldSet(this, _Ball_posY, __classPrivateFieldGet(this, _Ball_posY, "f") + this.speedY, "f");
    }
    collidesWithWorldEdge(edge) {
        if (edge === 'right') {
            return (__classPrivateFieldGet(this, _Ball_posX, "f") + this.speedX > this.world.posX + this.world.width - __classPrivateFieldGet(this, _Ball_radius, "f"));
        }
        if (edge === 'left') {
            return (__classPrivateFieldGet(this, _Ball_posX, "f") + this.speedX < this.world.posX + __classPrivateFieldGet(this, _Ball_radius, "f"));
        }
        if (edge === 'bottom') {
            return (__classPrivateFieldGet(this, _Ball_posY, "f") + this.speedY > this.world.posY + this.world.height - __classPrivateFieldGet(this, _Ball_radius, "f"));
        }
        if (edge === 'top') {
            return (__classPrivateFieldGet(this, _Ball_posY, "f") + this.speedY < this.world.posY + __classPrivateFieldGet(this, _Ball_radius, "f"));
        }
        return false;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(__classPrivateFieldGet(this, _Ball_posX, "f"), __classPrivateFieldGet(this, _Ball_posY, "f"), __classPrivateFieldGet(this, _Ball_radius, "f"), 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.fill();
    }
}
_Ball_posX = new WeakMap(), _Ball_posY = new WeakMap(), _Ball_radius = new WeakMap();
