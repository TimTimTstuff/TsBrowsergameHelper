define("src/game/gameloop/GameLoop", ["require", "exports"], function (require, exports) {
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
});
define("src/game/gameloop/FpsReport", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FPSReport = /** @class */ (function () {
        /**
         *
         */
        function FPSReport(sampleSize) {
            this._tickIndex = 0;
            this._tickSum = 0;
            this._sampleListSize = sampleSize;
            this._sampleList = [];
            for (var i = 0; i < sampleSize; i++) {
                this._sampleList[i] = 0;
            }
        }
        FPSReport.prototype.calculateFps = function (deltaTime) {
            this._tickSum -= this._sampleList[this._tickIndex];
            this._tickSum += deltaTime;
            this._sampleList[this._tickIndex] = deltaTime;
            if (++this._tickIndex == this._sampleListSize)
                this._tickIndex = 0;
            return Math.round(1000 / (this._tickSum / this._sampleListSize));
        };
        return FPSReport;
    }());
    exports.FPSReport = FPSReport;
});
define("src/game/TStuffGame", ["require", "exports", "src/game/gameloop/GameLoop", "src/game/gameloop/FpsReport"], function (require, exports, GameLoop_1, FpsReport_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameLoop = GameLoop_1.GameLoop;
    exports.FPSReport = FpsReport_1.FPSReport;
});
define("index", ["require", "exports", "src/game/TStuffGame"], function (require, exports, TStuffGame_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameLoop = TStuffGame_1.GameLoop;
    exports.FPSReport = TStuffGame_1.FPSReport;
});
define("src/index", ["require", "exports", "src/game/TStuffGame"], function (require, exports, TStuffGame_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var loop = new TStuffGame_2.GameLoop();
    var fpsCounter = new TStuffGame_2.FPSReport(5);
    loop.addUpdate(function () {
        console.log("FPS: " + fpsCounter.calculateFps(TStuffGame_2.GameLoop.deltaTime));
    });
    loop.addFixUpdate(function () {
        console.log("Call me Fixed: " + TStuffGame_2.GameLoop.totalTime);
    });
    loop.start();
    setTimeout(function () {
        loop.stop();
    }, 25000);
});
//# sourceMappingURL=tstuffgame.js.map