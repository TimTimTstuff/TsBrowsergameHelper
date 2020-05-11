"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameLoopEventRegister = /** @class */ (function () {
    function GameLoopEventRegister() {
        this._updateEventIndex = [];
        this._fixedUpateEventIndex = [];
        this._loopEvents = {};
    }
    GameLoopEventRegister.getEventId = function () {
        return "EID_" + this.EVENTID++;
    };
    GameLoopEventRegister.prototype.registerEvent = function (loopEvent) {
        var currId = GameLoopEventRegister.getEventId();
        this._loopEvents[currId] = loopEvent;
        loopEvent.EVID = currId;
        if (loopEvent.update != undefined) {
            this._updateEventIndex.push(currId);
        }
        if (loopEvent.fixedUpdate != undefined) {
            this._fixedUpateEventIndex.push(currId);
        }
    };
    GameLoopEventRegister.prototype.unregisterEvent = function (event) {
        var idToRemove = "";
        if (event.EVID !== undefined) {
            idToRemove = event.EVID;
        }
        else {
            idToRemove = event;
        }
        var indexOfUpdate = this._updateEventIndex.indexOf(idToRemove);
        if (indexOfUpdate != -1) {
            this._updateEventIndex.splice(indexOfUpdate, 1);
        }
        var indexOfFixedUpdate = this._fixedUpateEventIndex.indexOf(idToRemove);
        if (indexOfFixedUpdate != -1) {
            this._fixedUpateEventIndex.splice(indexOfFixedUpdate, 1);
        }
        delete this._loopEvents[idToRemove];
    };
    GameLoopEventRegister.prototype.callAllUpdateEvents = function () {
        var _this = this;
        this._updateEventIndex.forEach(function (ui) {
            if (_this._loopEvents[ui].isEnabled())
                _this._loopEvents[ui].update();
        });
    };
    GameLoopEventRegister.prototype.callAllFixedUpdateEvents = function () {
        var _this = this;
        this._fixedUpateEventIndex.forEach(function (ui) {
            if (_this._loopEvents[ui].isEnabled())
                _this._loopEvents[ui].fixedUpdate();
        });
    };
    GameLoopEventRegister.EVENTID = 0;
    return GameLoopEventRegister;
}());
exports.GameLoopEventRegister = GameLoopEventRegister;
