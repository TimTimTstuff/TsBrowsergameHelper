import { NumberAttributeBag } from "./NumberAttributeBag";
import { NumberAttribute } from "./NumberAttribute";

export class NamedNumberAttributes{

    private _attributes: {[index:string]:NumberAttributeBag} = {}
    private _attributeNameList: string[] = []

    constructor(attr?:{[index:string]:NumberAttribute[]}) {
        if(attr == undefined) return
        Object.keys(attr).forEach(k => {
            attr[k].forEach(kv=> {
                this.addAttribute(k,kv)
            })
        })
    }

    public getSaveObject() : {[index:string]:any} {
       let nnaExport: {[index:string]:NumberAttribute[]} = {}
       Object.keys(this._attributes).forEach(k => {
           nnaExport[k] = this._attributes[k].getSaveObject()
       })
       return nnaExport
    }

    private attributeExists(name:string):boolean{
        return this._attributes[name] !== undefined
    }

    public addAttribute(name: string, attr:NumberAttribute) {
        if(!this.attributeExists(name))
            this._attributes[name] = new NumberAttributeBag()
        this._attributes[name].addModifier(attr)
    }

    public getAttributeValue(name:string):number {
        if(this.attributeExists(name)) return this._attributes[name].getValue()
        return 0
    }

    public getAllAttributeNames() : string[] {
        return Object.keys(this._attributes)
    }
}