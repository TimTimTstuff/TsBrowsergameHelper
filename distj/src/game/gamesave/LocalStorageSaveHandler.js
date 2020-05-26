"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lz_string_1 = __importDefault(require("lz-string"));
class LocalStorageSaveHandler {
    /**
     *
     */
    constructor(saveName) {
        this._saveObject = {};
        this._saveKey = saveName;
    }
    loadSaveFile() {
        try {
            let saveLs = localStorage.getItem(this._saveKey);
            if (saveLs == null) {
                this.eventSaveNotFound();
                return;
            }
            let decoded = lz_string_1.default.decompressFromBase64(saveLs);
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
    }
    eventSaveFileCorrupted() {
        console.log(`Save file is corrupted.`);
        if (this.saveFileCorrupted != undefined)
            this.saveFileCorrupted();
    }
    eventSaveNotFound() {
        console.log(`Save file not found`);
        if (this.saveNotFound != undefined)
            this.saveNotFound();
    }
    initializeSave() {
        this.loadSaveFile();
    }
    addSaveObject(key, saveObject) {
        this._saveObject[key] = saveObject;
        this.saveFile();
    }
    getSaveObject(key) {
        return this._saveObject[key];
    }
    saveFile() {
        this._saveObject.lastSave = Date.now();
        let file = JSON.stringify(this._saveObject);
        let compress = lz_string_1.default.compressToBase64(file);
        localStorage.setItem(this._saveKey, compress);
        if (this.saveCreated != undefined)
            this.saveCreated();
    }
}
exports.LocalStorageSaveHandler = LocalStorageSaveHandler;
