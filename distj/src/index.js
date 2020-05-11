"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gamlooptest_1 = require("../test/gamlooptest");
var SaveHandler_1 = require("./game/gamesave/SaveHandler");
var gameLoopTest = new gamlooptest_1.GameLoopTest();
//gameLoopTest.run()
var sh = new SaveHandler_1.SaveHandler();
sh.saveObject();
