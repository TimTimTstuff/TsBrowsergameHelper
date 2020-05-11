export interface ISaveHandler {
    saveNotFound: (() => void) | undefined;
    saveLoaded: (() => void) | undefined;
    saveCreated: (() => void) | undefined;
    saveFileCorrupted: (() => void) | undefined;
    initializeSave(): void;
    addSaveObject(key: string, saveObject: any): void;
    getSaveObject(key: string): any;
    saveFile(): any;
}
