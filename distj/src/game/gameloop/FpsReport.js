"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FPSReport = /** @class */ (function () {
    /**
     *
     */
    function FPSReport(sampleSize) {
        this._tickIndex = 0;
        this._tickSum = 0;
        this._sampleListSize = sampleSize;
        this._sampleList = [];
        for (var i = 0; i < sampleSize; i++) {
            this._sampleList[i] = 0;
        }
    }
    FPSReport.prototype.calculateFps = function (deltaTime) {
        this._tickSum -= this._sampleList[this._tickIndex];
        this._tickSum += deltaTime;
        this._sampleList[this._tickIndex] = deltaTime;
        if (++this._tickIndex == this._sampleListSize)
            this._tickIndex = 0;
        return Math.round(1000 / (this._tickSum / this._sampleListSize));
    };
    return FPSReport;
}());
exports.FPSReport = FPSReport;
