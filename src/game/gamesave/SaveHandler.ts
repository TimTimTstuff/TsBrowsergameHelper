import LZString from 'lz-string'
export class SaveHandler {


    private _saveObject: { [index: string]: any } = {}
    private _saveKey: string

    public saveNotFound: (() => void) | undefined
    public saveLoaded: (() => void) | undefined
    public saveCreated: (() => void) | undefined
    public saveFileCorrupted: (() => void) | undefined

    /**
     *
     */
    constructor(saveName: string) {
        this._saveKey = saveName

        
    }

    public initializeSave() {
        this.loadSaveFile()
    }

    public addSaveObject(key:string, saveObject: any) {
        this._saveObject[key] = saveObject
        this.saveFile()
    }

    public getSaveObject(key:string): any{
        return this._saveObject[key]
    }

    private loadSaveFile() {
        try {
            let saveLs = localStorage.getItem(this._saveKey)
            if (saveLs == null) {
                this.eventSaveNotFound()
                return
            }
            let decoded = LZString.decompressFromBase64(saveLs)
            if (decoded == null) {
                this.eventSaveFileCorrupted()
                return
            }
            this._saveObject = JSON.parse(decoded)
        } catch (ex) {
            this.eventSaveFileCorrupted()
        }

        if(this.saveLoaded != undefined)
            this.saveLoaded()

    }

    private eventSaveFileCorrupted() {
        console.log(`Save file is corrupted.`)
        if(this.saveFileCorrupted != undefined)
            this.saveFileCorrupted()
    }

    private eventSaveNotFound() {
       console.log(`Save file not found`)
       if(this.saveNotFound != undefined)
            this.saveNotFound()
    }

    public saveFile(){
        this._saveObject.lastSave = Date.now()
        let file = JSON.stringify(this._saveObject)
        let compress = LZString.compressToBase64(file)
        localStorage.setItem(this._saveKey,compress)
        if(this.saveCreated != undefined)
            this.saveCreated()
    }

    public saveObject() {
        localStorage.setItem('ts', LZString.compressToBase64('Hallo ich bin ein haßenfuß!'))
        console.log(LZString.decompressFromBase64(localStorage.getItem('ts') || ""))
    }

}