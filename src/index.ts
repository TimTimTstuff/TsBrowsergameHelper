import { GameLoop, FPSReport } from "./game/TStuffGame"



const loop = new GameLoop()
const fpsCounter = new FPSReport(5)
loop.addUpdate(() => {
    console.log(`FPS: ${fpsCounter.calculateFps(GameLoop.deltaTime)}`)
})

loop.addFixUpdate(() => {
    console.log(`Call me Fixed: ${GameLoop.totalTime}`)
})

loop.start()

setTimeout(() => {
    loop.stop()
}, 25000);
