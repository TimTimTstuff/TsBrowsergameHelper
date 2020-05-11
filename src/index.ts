import { GameLoopTest } from "../test/gamlooptest";
import { SaveHandler } from "./game/gamesave/SaveHandler";
import { GameLoop } from "./game/TStuffGame";

const gameLoopTest = new GameLoopTest()
//gameLoopTest.run()
const loop = new GameLoop(300)
const sh = new SaveHandler('gamesave_abc')
let test = {i: 0}
sh.saveCreated = () => {
    console.log("Save created")
}

sh.saveFileCorrupted = () => {
    console.log("Save file corrupted")
}

sh.saveLoaded = () => {
    console.log("Save Loaded!")
    test = sh.getSaveObject('a')
}

sh.saveNotFound = () => {
    console.log("Save not found!")
    sh.addSaveObject('a',test)
}

sh.initializeSave()

loop.addUpdate(() => {
    test.i++
})

loop.addFixUpdate(() => {
    sh.saveFile()

   console.log(test)
})

loop.start()