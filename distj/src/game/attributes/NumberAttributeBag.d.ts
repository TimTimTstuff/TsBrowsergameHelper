import { NumberAttribute } from './NumberAttribute';
export declare class NumberAttributeBag {
    getValue(): number;
    getAttributeList(): NumberAttribute[];
    private _values;
    private _calculatedValue;
    private calculateValue;
    addModifier(attr: NumberAttribute): void;
    removeModifier(attr: NumberAttribute): void;
    removeModifierByKey(key: string): void;
}
