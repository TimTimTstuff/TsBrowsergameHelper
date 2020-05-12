"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TStuffGame_1 = require("../src/game/TStuffGame");
var GameSaveTest = /** @class */ (function () {
    function GameSaveTest() {
    }
    GameSaveTest.prototype.run = function () {
        var loop = new TStuffGame_1.GameLoop(2000);
        var sh = new TStuffGame_1.LocalStorageSaveHandler('gamesave_abc');
        var test = { i: 0 };
        sh.saveCreated = function () {
            console.log("Save created");
        };
        sh.saveFileCorrupted = function () {
            console.log("Save file corrupted");
        };
        sh.saveLoaded = function () {
            console.log("Save Loaded!");
            test = sh.getSaveObject('a');
        };
        sh.saveNotFound = function () {
            console.log("Save not found!");
            sh.addSaveObject('a', test);
        };
        sh.initializeSave();
        loop.addUpdate(function () {
            test.i++;
        });
        loop.addFixUpdate(function () {
            sh.saveFile();
            console.log(test);
        });
        loop.start();
    };
    return GameSaveTest;
}());
exports.GameSaveTest = GameSaveTest;
