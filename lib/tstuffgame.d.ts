declare module "src/game/gameloop/GameLoop" {
    export class GameLoop {
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
}
declare module "src/game/gameloop/FpsReport" {
    export class FPSReport {
        private _sampleList;
        private _sampleListSize;
        private _tickIndex;
        private _tickSum;
        /**
         *
         */
        constructor(sampleSize: number);
        calculateFps(deltaTime: number): number;
    }
}
declare module "src/game/TStuffGame" {
    export { GameLoop } from "src/game/gameloop/GameLoop";
    export { FPSReport } from "src/game/gameloop/FpsReport";
}
declare module "index" {
    export { GameLoop, FPSReport } from "src/game/TStuffGame";
}
declare module "src/index" { }
//# sourceMappingURL=tstuffgame.d.ts.map