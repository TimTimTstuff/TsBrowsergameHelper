import { IGameLoopEvent } from "./IGameLoopEvent";

export class GameLoopEventRegister {
    private static EVENTID: number = 0;

    private static getEventId() {
        return `EID_${this.EVENTID++}`;
    }

    private _updateEventIndex: string[] = [];
    private _fixedUpateEventIndex: string[] = [];

    private _loopEvents: { [index: string]: IGameLoopEvent; } = {};

    public registerEvent(loopEvent: IGameLoopEvent) {
        let currId = GameLoopEventRegister.getEventId();

        this._loopEvents[currId] = loopEvent;
        loopEvent.EVID = currId;

        if (loopEvent.update != undefined) {
            this._updateEventIndex.push(currId);
        }

        if (loopEvent.fixedUpdate != undefined) {
            this._fixedUpateEventIndex.push(currId);
        }
    }

    public unregisterEvent(event: IGameLoopEvent | string) {
        let idToRemove = "";

        if ((event as IGameLoopEvent).EVID !== undefined) {
            idToRemove = (event as IGameLoopEvent).EVID;
        }
        else {
            idToRemove = (event as string);
        }

        let indexOfUpdate = this._updateEventIndex.indexOf(idToRemove);
        if (indexOfUpdate != -1) {
            this._updateEventIndex.splice(indexOfUpdate, 1);
        }

        let indexOfFixedUpdate = this._fixedUpateEventIndex.indexOf(idToRemove);
        if (indexOfFixedUpdate != -1) {
            this._fixedUpateEventIndex.splice(indexOfFixedUpdate, 1);
        }

        delete this._loopEvents[idToRemove];
    }

    public callAllUpdateEvents() {
        this._updateEventIndex.forEach(ui => {
            if (this._loopEvents[ui].isEnabled())
                (this._loopEvents[ui].update as () => void)();
        });
    }

    public callAllFixedUpdateEvents() {
        this._fixedUpateEventIndex.forEach(ui => {
            if (this._loopEvents[ui].isEnabled())
                (this._loopEvents[ui].fixedUpdate as () => void)();
        });
    }
}
