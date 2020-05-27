"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberAttributeBag_1 = require("./NumberAttributeBag");
class NamedNumberAttributes {
    constructor(attr) {
        this._attributes = {};
        this._attributeNameList = [];
        if (attr == undefined)
            return;
        Object.keys(attr).forEach(k => {
            attr[k].forEach(kv => {
                this.addAttribute(k, kv);
            });
        });
    }
    getSaveObject() {
        let nnaExport = {};
        Object.keys(this._attributes).forEach(k => {
            nnaExport[k] = this._attributes[k].getSaveObject();
        });
        return nnaExport;
    }
    attributeExists(name) {
        return this._attributes[name] !== undefined;
    }
    addAttribute(name, attr) {
        if (!this.attributeExists(name))
            this._attributes[name] = new NumberAttributeBag_1.NumberAttributeBag();
        this._attributes[name].addModifier(attr);
    }
    getAttributeValue(name) {
        if (this.attributeExists(name))
            return this._attributes[name].getValue();
        return 0;
    }
    getAllAttributeNames() {
        return Object.keys(this._attributes);
    }
}
exports.NamedNumberAttributes = NamedNumberAttributes;
