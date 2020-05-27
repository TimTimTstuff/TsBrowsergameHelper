import { NumberAttribute } from "./NumberAttribute";
export declare class NamedNumberAttributes {
    private _attributes;
    private _attributeNameList;
    constructor(attr?: {
        [index: string]: NumberAttribute[];
    });
    getSaveObject(): {
        [index: string]: any;
    };
    private attributeExists;
    addAttribute(name: string, attr: NumberAttribute): void;
    getAttributeValue(name: string): number;
    getAllAttributeNames(): string[];
}
