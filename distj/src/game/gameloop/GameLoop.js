"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameLoop {
    /**
     *
     */
    constructor(fixedUpdateTime = 100) {
        /**
         * Settings
         */
        this._running = false;
        this._fixedUpdateElapsed = 0;
        this._updateCallList = [];
        this._fixedUpdateCallList = [];
        this._lastFrameTime = 0;
        this._fixedUpdateTime = fixedUpdateTime;
        console.log('Start Game loop');
        this.callRequestFrame();
    }
    /**
     *
     * @param callBack callback method which is called each frame
     * @returns number index of the callback
     */
    addUpdate(callBack) {
        this._updateCallList.push(callBack);
        return this._updateCallList.length - 1;
    }
    removeUpdate(index) {
        this._updateCallList[index] = null;
    }
    /**
     *
     * @param callBack callback method which is called each frame
     * @returns number index of the callback
     */
    addFixUpdate(callBack) {
        this._fixedUpdateCallList.push(callBack);
        return this._fixedUpdateCallList.length - 1;
    }
    removeFixUpdate(index) {
        this._fixedUpdateCallList[index] = null;
    }
    start() {
        this._running = true;
    }
    stop() {
        this._running = false;
    }
    runUpdate() {
        if (this._fixedUpdateElapsed >= this._fixedUpdateTime) {
            this._fixedUpdateCallList.forEach(cb => {
                if (cb !== null)
                    cb();
            });
            this._fixedUpdateElapsed = this._fixedUpdateElapsed - this._fixedUpdateTime;
        }
        this._updateCallList.forEach(cb => {
            if (cb !== null)
                cb();
        });
        this._fixedUpdateElapsed += GameLoop.deltaTime;
    }
    /**
     * Recursive update calling
     */
    callRequestFrame() {
        requestAnimationFrame((time) => {
            if (this._running) {
                GameLoop.deltaTime = Math.round((time - this._lastFrameTime) * 1000) / 1000;
                GameLoop.totalTime = time;
                this.runUpdate();
                this._lastFrameTime = time;
            }
            this.callRequestFrame();
        });
    }
}
exports.GameLoop = GameLoop;
