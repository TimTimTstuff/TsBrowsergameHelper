"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/*export { GameLoop } from './gameloop/GameLoop'
export { FPSReport } from './gameloop/FpsReport'
export { GameLoopEventRegister } from './gameevent/GameLoopEventRegister'
export { IGameLoopEvent } from './gameevent/IGameLoopEvent'
export { GameEventRegister } from './gameevent/GameEventRegister'
export { IGameEvent } from './gameevent/IGameEvent'
export { LocalStorageSaveHandler } from './gamesave/LocalStorageSaveHandler'
export { ISaveHandler } from './gamesave/ISaveHandler'*/
__export(require("./attributes"));
__export(require("./gameevent"));
__export(require("./gameloop"));
__export(require("./gamesave"));
__export(require("./inventory"));
