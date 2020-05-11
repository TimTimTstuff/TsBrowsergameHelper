import { ISaveHandler } from "./ISaveHandler";
export declare class LocalStorageSaveHandler implements ISaveHandler {
    private _saveObject;
    private _saveKey;
    saveNotFound: (() => void) | undefined;
    saveLoaded: (() => void) | undefined;
    saveCreated: (() => void) | undefined;
    saveFileCorrupted: (() => void) | undefined;
    /**
     *
     */
    constructor(saveName: string);
    private loadSaveFile;
    private eventSaveFileCorrupted;
    private eventSaveNotFound;
    initializeSave(): void;
    addSaveObject(key: string, saveObject: any): void;
    getSaveObject(key: string): any;
    saveFile(): void;
}
