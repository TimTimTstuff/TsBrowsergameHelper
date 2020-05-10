
export class GameLoop {

    /**
     * Settings 
     */
    private _running: boolean = false
    private _lastFrameTime: number
    private _fixedUpdateTime: number
    private _fixedUpdateElapsed:number = 0

    /**
     * Time callers
     */
    public static deltaTime: number
    public static totalTime: number

    private _updateCallList: ((() => void) | null)[] = []
    private _fixedUpdateCallList: ((() => void) | null)[] = []

    /**
     *
     */
    constructor(fixedUpdateTime:number = 100) {
        this._lastFrameTime = 0
        this._fixedUpdateTime = fixedUpdateTime
        console.log('Start Game loop')
        this.callRequestFrame()
    }

    /**
     * 
     * @param callBack callback method which is called each frame
     * @returns number index of the callback
     */
    public addUpdate(callBack: () => void): number {
        this._updateCallList.push(callBack)
        return this._updateCallList.length - 1
    }

    public removeUpdate(index: number): void {
        this._updateCallList[index] = null
    }

    /**
     * 
     * @param callBack callback method which is called each frame
     * @returns number index of the callback
     */
    public addFixUpdate(callBack: () => void): number {
        this._fixedUpdateCallList.push(callBack)
        return this._fixedUpdateCallList.length - 1
    }

    public removeFixUpdate(index: number): void {
        this._fixedUpdateCallList[index] = null
    }

    public start() {
        this._running = true
    }

    public stop() {
        this._running = false
    }

    private runUpdate() {

        if(this._fixedUpdateElapsed >= this._fixedUpdateTime){
            this._fixedUpdateCallList.forEach(cb => {
                if(cb !== null)
                    cb()
            })
            this._fixedUpdateElapsed = this._fixedUpdateElapsed - this._fixedUpdateTime
        }

        this._updateCallList.forEach(cb => {
            if (cb !== null)
                cb()
        })
        this._fixedUpdateElapsed += GameLoop.deltaTime
        
       
    }

    /**
     * Recursive update calling
     */
    private callRequestFrame() {
        requestAnimationFrame((time) => {
            if (this._running) {
                GameLoop.deltaTime = Math.round((time - this._lastFrameTime) * 1000) / 1000
                GameLoop.totalTime = time
                this.runUpdate()
                this._lastFrameTime = time
            }
            this.callRequestFrame()
        })
    }


}

