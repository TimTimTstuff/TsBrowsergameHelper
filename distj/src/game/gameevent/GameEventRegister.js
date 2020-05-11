"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventRegister = /** @class */ (function () {
    function GameEventRegister() {
        this._eventList = {};
    }
    GameEventRegister.prototype.registerEvent = function (event) {
        if (this._eventList[event.eventType] != undefined)
            throw new Error("Event: " + event.eventType + " allready registered!");
        this._eventList[event.eventType] = event;
    };
    GameEventRegister.prototype.unregisterEvent = function (event) {
        if (event.eventType != undefined) {
            delete this._eventList[event.eventType];
        }
        else {
            delete this._eventList[event];
        }
    };
    GameEventRegister.prototype.callEvent = function (eventType, caller, arg, throwErrorIfMissing) {
        if (throwErrorIfMissing === void 0) { throwErrorIfMissing = false; }
        if (this._eventList[eventType] == undefined) {
            if (throwErrorIfMissing)
                throw new Error("Event: " + eventType + " not registered!");
            return;
        }
        this._eventList[eventType].callEvent(caller, arg);
    };
    return GameEventRegister;
}());
exports.GameEventRegister = GameEventRegister;
