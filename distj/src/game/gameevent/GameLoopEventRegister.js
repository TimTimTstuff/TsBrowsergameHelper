"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameLoopEventRegister {
    constructor() {
        this._updateEventIndex = [];
        this._fixedUpateEventIndex = [];
        this._loopEvents = {};
    }
    static getEventId() {
        return `EID_${this.EVENTID++}`;
    }
    registerEvent(loopEvent) {
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
    unregisterEvent(event) {
        let idToRemove = "";
        if (event.EVID !== undefined) {
            idToRemove = event.EVID;
        }
        else {
            idToRemove = event;
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
    callAllUpdateEvents() {
        this._updateEventIndex.forEach(ui => {
            if (this._loopEvents[ui].isEnabled())
                this._loopEvents[ui].update();
        });
    }
    callAllFixedUpdateEvents() {
        this._fixedUpateEventIndex.forEach(ui => {
            if (this._loopEvents[ui].isEnabled())
                this._loopEvents[ui].fixedUpdate();
        });
    }
}
exports.GameLoopEventRegister = GameLoopEventRegister;
GameLoopEventRegister.EVENTID = 0;
