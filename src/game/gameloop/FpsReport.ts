
export class FPSReport {
    private _sampleList: number[]
    private _sampleListSize: number
    private _tickIndex = 0
    private _tickSum = 0

    /**
     *
     */
    constructor(sampleSize: number) {
        this._sampleListSize = sampleSize
        this._sampleList = []
        for (let i = 0; i < sampleSize; i++) {
            this._sampleList[i] = 0
        }
    }

    public calculateFps(deltaTime: number) {
        this._tickSum -= this._sampleList[this._tickIndex]

        this._tickSum += deltaTime
        this._sampleList[this._tickIndex] = deltaTime

        if (++this._tickIndex == this._sampleListSize)
            this._tickIndex = 0

        return Math.round(1000 / (this._tickSum / this._sampleListSize))
    }
}