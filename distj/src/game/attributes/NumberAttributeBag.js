"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberAttribute_1 = require("./NumberAttribute");
class NumberAttributeBag {
    constructor() {
        this._values = [];
        this._calculatedValue = 0;
    }
    getValue() {
        return this._calculatedValue;
    }
    getAttributeList() {
        return this._values;
    }
    calculateValue() {
        let baseValue = 0;
        let percentage = 0;
        this._values.forEach(a => {
            if (a.type == NumberAttribute_1.NumberAttributeType.FIXED_VALUE) {
                baseValue += a.value;
            }
            else if (a.type == NumberAttribute_1.NumberAttributeType.PERCENTAGE_ADD) {
                percentage += a.value;
            }
        });
        baseValue *= 1 + percentage;
        this._values.forEach(a => {
            if (a.type == NumberAttribute_1.NumberAttributeType.PERCENTAGE_MULT) {
                baseValue *= 1 + a.value;
            }
        });
        this._calculatedValue = Math.round(baseValue * 100) / 100;
    }
    addModifier(attr) {
        this._values.push(attr);
        this.calculateValue();
    }
    removeModifier(attr) {
        let ri = this._values.indexOf(attr);
        if (ri == -1) {
            ri = this._values.indexOf(this._values.find(c => { return c.key == attr.key && c.type == attr.type && c.value == attr.value; }) || {});
            if (ri == -1)
                return;
        }
        this._values.splice(ri, 1);
        this.calculateValue();
    }
    removeModifierByKey(key) {
        let toRemove = this._values.filter(a => a.key == key);
        toRemove.forEach(tr => {
            this.removeModifier(tr);
        });
    }
}
exports.NumberAttributeBag = NumberAttributeBag;
