export declare class SaveHandler {
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
    initializeSave(): void;
    addSaveObject(key: string, saveObject: any): void;
    getSaveObject(key: string): any;
    private loadSaveFile;
    private eventSaveFileCorrupted;
    private eventSaveNotFound;
    saveFile(): void;
    saveObject(): void;
}
