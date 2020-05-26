"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameEventRegister {
    constructor() {
        this._eventList = {};
    }
    registerEvent(event) {
        if (this._eventList[event.eventType] != undefined)
            throw new Error(`Event: ${event.eventType} allready registered!`);
        this._eventList[event.eventType] = event;
    }
    unregisterEvent(event) {
        if (event.eventType != undefined) {
            delete this._eventList[event.eventType];
        }
        else {
            delete this._eventList[event];
        }
    }
    callEvent(eventType, caller, arg, throwErrorIfMissing = false) {
        if (this._eventList[eventType] == undefined) {
            if (throwErrorIfMissing)
                throw new Error(`Event: ${eventType} not registered!`);
            return;
        }
        this._eventList[eventType].callEvent(caller, arg);
    }
}
exports.GameEventRegister = GameEventRegister;
