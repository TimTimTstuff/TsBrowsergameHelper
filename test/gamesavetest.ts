import * as TGame from '../src/game/TStuffGame'

export class GameSaveTest {
    public run() {
        const loop = new TGame.GameLoop(2000)
const sh: TGame.ISaveHandler = new TGame.LocalStorageSaveHandler('gamesave_abc')
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
    }
}