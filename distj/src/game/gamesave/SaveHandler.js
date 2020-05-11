"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lz_string_1 = __importDefault(require("lz-string"));
var SaveHandler = /** @class */ (function () {
    /**
     *
     */
    function SaveHandler() {
        console.log('run save');
    }
    SaveHandler.prototype.saveObject = function () {
        localStorage.setItem('ts', lz_string_1.default.compressToBase64('Hallo ich bin ein haßenfuß!'));
        console.log(lz_string_1.default.decompressFromBase64(localStorage.getItem('ts') || ""));
    };
    return SaveHandler;
}());
exports.SaveHandler = SaveHandler;
