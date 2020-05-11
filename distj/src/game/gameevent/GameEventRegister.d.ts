import { IGameEvent } from "./IGameEvent";
export declare class GameEventRegister {
    private _eventList;
    registerEvent(event: IGameEvent): void;
    unregisterEvent(event: IGameEvent | string): void;
    callEvent(eventType: string, caller: any, arg: any, throwErrorIfMissing?: boolean): void;
}
//# sourceMappingURL=GameEventRegister.d.ts.map