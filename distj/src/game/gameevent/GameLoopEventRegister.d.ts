import { IGameLoopEvent } from "./IGameLoopEvent";
export declare class GameLoopEventRegister {
    private static EVENTID;
    private static getEventId;
    private _updateEventIndex;
    private _fixedUpateEventIndex;
    private _loopEvents;
    registerEvent(loopEvent: IGameLoopEvent): void;
    unregisterEvent(event: IGameLoopEvent | string): void;
    callAllUpdateEvents(): void;
    callAllFixedUpdateEvents(): void;
}
//# sourceMappingURL=GameLoopEventRegister.d.ts.map