export declare class GameLoop {
    /**
     * Settings
     */
    private _running;
    private _lastFrameTime;
    private _fixedUpdateTime;
    private _fixedUpdateElapsed;
    /**
     * Time callers
     */
    static deltaTime: number;
    static totalTime: number;
    private _updateCallList;
    private _fixedUpdateCallList;
    /**
     *
     */
    constructor(fixedUpdateTime?: number);
    /**
     *
     * @param callBack callback method which is called each frame
     * @returns number index of the callback
     */
    addUpdate(callBack: () => void): number;
    removeUpdate(index: number): void;
    /**
     *
     * @param callBack callback method which is called each frame
     * @returns number index of the callback
     */
    addFixUpdate(callBack: () => void): number;
    removeFixUpdate(index: number): void;
    start(): void;
    stop(): void;
    private runUpdate;
    /**
     * Recursive update calling
     */
    private callRequestFrame;
}
