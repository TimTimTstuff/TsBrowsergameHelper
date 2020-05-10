"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TStuffGame_1 = require("./game/TStuffGame");
var loop = new TStuffGame_1.GameLoop();
var fpsCounter = new TStuffGame_1.FPSReport(5);
loop.addUpdate(function () {
    console.log("FPS: " + fpsCounter.calculateFps(TStuffGame_1.GameLoop.deltaTime));
});
loop.addFixUpdate(function () {
    console.log("Call me Fixed: " + TStuffGame_1.GameLoop.totalTime);
});
loop.start();
setTimeout(function () {
    loop.stop();
}, 25000);
//# sourceMappingURL=index.js.map