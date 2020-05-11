"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameLoop = /** @class */ (function () {
    /**
     *
     */
    function GameLoop(fixedUpdateTime) {
        if (fixedUpdateTime === void 0) { fixedUpdateTime = 100; }
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
    GameLoop.prototype.addUpdate = function (callBack) {
        this._updateCallList.push(callBack);
        return this._updateCallList.length - 1;
    };
    GameLoop.prototype.removeUpdate = function (index) {
        this._updateCallList[index] = null;
    };
    /**
     *
     * @param callBack callback method which is called each frame
     * @returns number index of the callback
     */
    GameLoop.prototype.addFixUpdate = function (callBack) {
        this._fixedUpdateCallList.push(callBack);
        return this._fixedUpdateCallList.length - 1;
    };
    GameLoop.prototype.removeFixUpdate = function (index) {
        this._fixedUpdateCallList[index] = null;
    };
    GameLoop.prototype.start = function () {
        this._running = true;
    };
    GameLoop.prototype.stop = function () {
        this._running = false;
    };
    GameLoop.prototype.runUpdate = function () {
        if (this._fixedUpdateElapsed >= this._fixedUpdateTime) {
            this._fixedUpdateCallList.forEach(function (cb) {
                if (cb !== null)
                    cb();
            });
            this._fixedUpdateElapsed = this._fixedUpdateElapsed - this._fixedUpdateTime;
        }
        this._updateCallList.forEach(function (cb) {
            if (cb !== null)
                cb();
        });
        this._fixedUpdateElapsed += GameLoop.deltaTime;
    };
    /**
     * Recursive update calling
     */
    GameLoop.prototype.callRequestFrame = function () {
        var _this = this;
        requestAnimationFrame(function (time) {
            if (_this._running) {
                GameLoop.deltaTime = Math.round((time - _this._lastFrameTime) * 1000) / 1000;
                GameLoop.totalTime = time;
                _this.runUpdate();
                _this._lastFrameTime = time;
            }
            _this.callRequestFrame();
        });
    };
    return GameLoop;
}());
exports.GameLoop = GameLoop;
