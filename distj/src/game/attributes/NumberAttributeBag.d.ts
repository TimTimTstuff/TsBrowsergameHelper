import { NumberAttribute } from './NumberAttribute';
export declare class NumberAttributeBag {
    private _values;
    private _calculatedValue;
    getSaveObject(): any;
    constructor(numAttributes?: NumberAttribute[]);
    getValue(): number;
    getAttributeList(): NumberAttribute[];
    private calculateValue;
    addModifier(attr: NumberAttribute): void;
    removeModifier(attr: NumberAttribute): void;
    removeModifierByKey(key: string): void;
}
