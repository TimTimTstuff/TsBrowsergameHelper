export interface IGameEvent {
    eventType: string;
    callEvent(caller: any, arg: any): void;
}
