"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TGame = __importStar(require("../src/game/TStuffGame"));
class GameSaveTest {
    run() {
        const loop = new TGame.GameLoop(2000);
        const sh = new TGame.LocalStorageSaveHandler('gamesave_abc');
        let test = { i: 0 };
        sh.saveCreated = () => {
            console.log("Save created");
        };
        sh.saveFileCorrupted = () => {
            console.log("Save file corrupted");
        };
        sh.saveLoaded = () => {
            console.log("Save Loaded!");
            test = sh.getSaveObject('a');
        };
        sh.saveNotFound = () => {
            console.log("Save not found!");
            sh.addSaveObject('a', test);
        };
        sh.initializeSave();
        loop.addUpdate(() => {
            test.i++;
        });
        loop.addFixUpdate(() => {
            sh.saveFile();
            console.log(test);
        });
        loop.start();
    }
}
exports.GameSaveTest = GameSaveTest;
