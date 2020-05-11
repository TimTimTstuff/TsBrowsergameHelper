export interface IGameLoopEvent {
    EVID: string;
    isEnabled(): boolean;
    update: (() => void) | undefined;
    fixedUpdate: (() => void) | undefined;
}
