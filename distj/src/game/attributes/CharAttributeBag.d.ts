import { CharacterAttribute } from './CharacterAttribute';
export declare class CharAttributeBag {
    getValue(): number;
    getAttributeList(): CharacterAttribute[];
    private _values;
    private _calculatedValue;
    private calculateValue;
    addModifier(attr: CharacterAttribute): void;
    removeModifier(attr: CharacterAttribute): void;
}
