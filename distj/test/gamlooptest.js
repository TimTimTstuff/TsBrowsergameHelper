"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TStuffGame_1 = require("../src/game/TStuffGame");
class GameLoopTest {
    run() {
        const loop = new TStuffGame_1.GameLoop();
        const fpsCounter = new TStuffGame_1.FPSReport(5);
        const gr = new TStuffGame_1.GameLoopEventRegister();
        gr.registerEvent(new Le());
        gr.registerEvent(new Lee());
        gr.registerEvent(new Leee());
        loop.addUpdate(() => {
            console.log(`FPS: ${fpsCounter.calculateFps(TStuffGame_1.GameLoop.deltaTime)}`);
        });
        loop.addUpdate(() => {
            gr.callAllUpdateEvents();
        });
        loop.addFixUpdate(() => {
            gr.callAllFixedUpdateEvents();
        });
        loop.addFixUpdate(() => {
            console.log(`Call me Fixed1: ${TStuffGame_1.GameLoop.totalTime}`);
        });
        loop.start();
        setTimeout(() => {
            loop.stop();
        }, 25000);
    }
}
exports.GameLoopTest = GameLoopTest;
class Le {
    /**
     *
     */
    constructor() {
        this.EVID = "";
        this.calls = 0;
        this.callsf = 0;
        let elm = document.getElementById('f1');
        let elm2 = document.getElementById('f2');
        this.update = () => {
            elm.innerHTML = (this.calls++).toString() + " Updates";
            //console.log(`Call ${this.EVID} Update`)
        };
        this.fixedUpdate = () => {
            elm2.innerHTML = (this.callsf++).toString() + " Fixed Updates";
            // console.log(`Call ${this.EVID} Fixed Update`)
        };
    }
    isEnabled() {
        return true;
    }
}
class Lee {
    /**
     *
     */
    constructor() {
        this.EVID = "";
        this.calls = 0;
        let elm = document.getElementById('f3');
        this.update = () => {
            elm.innerHTML = (this.calls++).toString() + " Updates";
            //console.log(`Call ${this.EVID} Update`)
        };
        this.fixedUpdate = undefined;
    }
    isEnabled() {
        return true;
    }
}
class Leee {
    /**
     *
     */
    constructor() {
        this.EVID = "";
        this.calls = 0;
        this.update = undefined;
        let elm = document.getElementById('f4');
        this.fixedUpdate = () => {
            elm.innerHTML = (this.calls++).toString() + " Fixed Updates";
            //console.log(`Call ${this.EVID} Fixed Update`)
        };
    }
    isEnabled() {
        return true;
    }
}
