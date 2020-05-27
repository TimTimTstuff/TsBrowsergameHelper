"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberAttributeBag_1 = require("./NumberAttributeBag");
class NamedNumberAttributes {
    constructor() {
        this._attributes = {};
        this._attributeNameList = [];
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
