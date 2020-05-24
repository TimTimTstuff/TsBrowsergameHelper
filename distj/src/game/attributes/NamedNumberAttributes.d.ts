import { NumberAttribute } from "./NumberAttribute";
export declare class NamedNumberAttributes {
    private _attributes;
    private _attributeNameList;
    private attributeExists;
    addAttribute(name: string, attr: NumberAttribute): void;
    getAttributeValue(name: string): number;
    getAllAttributeNames(): string[];
}
