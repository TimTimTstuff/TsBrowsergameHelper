export interface IGameLoopEvent {
    EVID: string;
    isEnabled(): boolean;
    update: (() => void) | undefined;
    fixedUpdate: (() => void) | undefined;
}
//# sourceMappingURL=IGameLoopEvent.d.ts.map