import { GameLoopTest } from "../test/gamlooptest";
import { GameSaveTest } from "../test/gamesavetest";
import { AttrTest } from "../test/attributetest";

const gameLoopTest = new GameLoopTest()
//gameLoopTest.run()
const gameSaveTest = new GameSaveTest()
//gameSaveTest.run()
const attrTest = new AttrTest()
attrTest.run()