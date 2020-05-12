"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lz_string_1 = __importDefault(require("lz-string"));
var LocalStorageSaveHandler = /** @class */ (function () {
    /**
     *
     */
    function LocalStorageSaveHandler(saveName) {
        this._saveObject = {};
        this._saveKey = saveName;
    }
    LocalStorageSaveHandler.prototype.loadSaveFile = function () {
        try {
            var saveLs = localStorage.getItem(this._saveKey);
            if (saveLs == null) {
                this.eventSaveNotFound();
                return;
            }
            var decoded = lz_string_1.default.decompressFromBase64(saveLs);
            if (decoded == null) {
                this.eventSaveFileCorrupted();
                return;
            }
            this._saveObject = JSON.parse(decoded);
        }
        catch (ex) {
            this.eventSaveFileCorrupted();
        }
        if (this.saveLoaded != undefined)
            this.saveLoaded();
    };
    LocalStorageSaveHandler.prototype.eventSaveFileCorrupted = function () {
        console.log("Save file is corrupted.");
        if (this.saveFileCorrupted != undefined)
            this.saveFileCorrupted();
    };
    LocalStorageSaveHandler.prototype.eventSaveNotFound = function () {
        console.log("Save file not found");
        if (this.saveNotFound != undefined)
            this.saveNotFound();
    };
    LocalStorageSaveHandler.prototype.initializeSave = function () {
        this.loadSaveFile();
    };
    LocalStorageSaveHandler.prototype.addSaveObject = function (key, saveObject) {
        this._saveObject[key] = saveObject;
        this.saveFile();
    };
    LocalStorageSaveHandler.prototype.getSaveObject = function (key) {
        return this._saveObject[key];
    };
    LocalStorageSaveHandler.prototype.saveFile = function () {
        this._saveObject.lastSave = Date.now();
        var file = JSON.stringify(this._saveObject);
        var compress = lz_string_1.default.compressToBase64(file);
        localStorage.setItem(this._saveKey, compress);
        if (this.saveCreated != undefined)
            this.saveCreated();
    };
    return LocalStorageSaveHandler;
}());
exports.LocalStorageSaveHandler = LocalStorageSaveHandler;
