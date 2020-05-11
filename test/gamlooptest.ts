import { IGameLoopEvent, GameLoop, FPSReport, GameLoopEventRegister } from "../src/game/TStuffGame"

export class GameLoopTest {

    public run(): void {
        const loop = new GameLoop()
        const fpsCounter = new FPSReport(5)


        const gr = new GameLoopEventRegister()

        gr.registerEvent(new Le())
        gr.registerEvent(new Lee())
        gr.registerEvent(new Leee())

        loop.addUpdate(() => {
            console.log(`FPS: ${fpsCounter.calculateFps(GameLoop.deltaTime)}`)
        })

        loop.addUpdate(() => {
            gr.callAllUpdateEvents()
        })

        loop.addFixUpdate(() => {
            gr.callAllFixedUpdateEvents()
        })

        loop.addFixUpdate(() => {
            console.log(`Call me Fixed: ${GameLoop.totalTime}`)
        })

        loop.start()

        setTimeout(() => {
            loop.stop()
        }, 25000);
    }

}



class Le implements IGameLoopEvent {
    EVID: string = ""
    calls: number = 0
    callsf: number = 0
    isEnabled(): boolean {
        return true
    }
    update: (() => void) | undefined
    fixedUpdate: (() => void) | undefined

    /**
     *
     */
    constructor() {
        let elm = document.getElementById('f1') as HTMLElement
        let elm2 = document.getElementById('f2') as HTMLElement
        this.update = () => {
            elm.innerHTML = (this.calls++).toString() + " Updates"
            //console.log(`Call ${this.EVID} Update`)
        }

        this.fixedUpdate = () => {
            elm2.innerHTML = (this.callsf++).toString() + " Fixed Updates"
            // console.log(`Call ${this.EVID} Fixed Update`)
        }

    }

}

class Lee implements IGameLoopEvent {
    EVID: string = ""
    calls: number = 0
    isEnabled(): boolean {
        return true
    }
    update: (() => void) | undefined
    fixedUpdate: (() => void) | undefined

    /**
     *
     */
    constructor() {
        let elm = document.getElementById('f3') as HTMLElement
        this.update = () => {
            elm.innerHTML = (this.calls++).toString() + " Updates"
            //console.log(`Call ${this.EVID} Update`)
        }

        this.fixedUpdate = undefined

    }

}
class Leee implements IGameLoopEvent {
    EVID: string = ""
    calls: number = 0
    isEnabled(): boolean {
        return true
    }
    update: (() => void) | undefined
    fixedUpdate: (() => void) | undefined

    /**
     *
     */
    constructor() {
        this.update = undefined
        let elm = document.getElementById('f4') as HTMLElement
        this.fixedUpdate = () => {
            elm.innerHTML = (this.calls++).toString() + " Fixed Updates"
            //console.log(`Call ${this.EVID} Fixed Update`)
        }

    }

}
