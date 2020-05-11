"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TStuffGame_1 = require("../src/game/TStuffGame");
var GameLoopTest = /** @class */ (function () {
    function GameLoopTest() {
    }
    GameLoopTest.prototype.run = function () {
        var loop = new TStuffGame_1.GameLoop();
        var fpsCounter = new TStuffGame_1.FPSReport(5);
        var gr = new TStuffGame_1.GameLoopEventRegister();
        gr.registerEvent(new Le());
        gr.registerEvent(new Lee());
        gr.registerEvent(new Leee());
        loop.addUpdate(function () {
            console.log("FPS: " + fpsCounter.calculateFps(TStuffGame_1.GameLoop.deltaTime));
        });
        loop.addUpdate(function () {
            gr.callAllUpdateEvents();
        });
        loop.addFixUpdate(function () {
            gr.callAllFixedUpdateEvents();
        });
        loop.addFixUpdate(function () {
            console.log("Call me Fixed1: " + TStuffGame_1.GameLoop.totalTime);
        });
        loop.start();
        setTimeout(function () {
            loop.stop();
        }, 25000);
    };
    return GameLoopTest;
}());
exports.GameLoopTest = GameLoopTest;
var Le = /** @class */ (function () {
    /**
     *
     */
    function Le() {
        var _this = this;
        this.EVID = "";
        this.calls = 0;
        this.callsf = 0;
        var elm = document.getElementById('f1');
        var elm2 = document.getElementById('f2');
        this.update = function () {
            elm.innerHTML = (_this.calls++).toString() + " Updates";
            //console.log(`Call ${this.EVID} Update`)
        };
        this.fixedUpdate = function () {
            elm2.innerHTML = (_this.callsf++).toString() + " Fixed Updates";
            // console.log(`Call ${this.EVID} Fixed Update`)
        };
    }
    Le.prototype.isEnabled = function () {
        return true;
    };
    return Le;
}());
var Lee = /** @class */ (function () {
    /**
     *
     */
    function Lee() {
        var _this = this;
        this.EVID = "";
        this.calls = 0;
        var elm = document.getElementById('f3');
        this.update = function () {
            elm.innerHTML = (_this.calls++).toString() + " Updates";
            //console.log(`Call ${this.EVID} Update`)
        };
        this.fixedUpdate = undefined;
    }
    Lee.prototype.isEnabled = function () {
        return true;
    };
    return Lee;
}());
var Leee = /** @class */ (function () {
    /**
     *
     */
    function Leee() {
        var _this = this;
        this.EVID = "";
        this.calls = 0;
        this.update = undefined;
        var elm = document.getElementById('f4');
        this.fixedUpdate = function () {
            elm.innerHTML = (_this.calls++).toString() + " Fixed Updates";
            //console.log(`Call ${this.EVID} Fixed Update`)
        };
    }
    Leee.prototype.isEnabled = function () {
        return true;
    };
    return Leee;
}());
