import { GameLoopTest } from "../test/gamlooptest";
import { GameLoop } from "./game/TStuffGame";
import { LocalStorageSaveHandler } from "./game/gamesave/LocalStorageSaveHandler";
import { ISaveHandler } from "./game/gamesave/ISaveHandler";
import { GameSaveTest } from "../test/gamesavetest";

const gameLoopTest = new GameLoopTest()
//gameLoopTest.run()
const gameSaveTest = new GameSaveTest()
gameSaveTest.run()