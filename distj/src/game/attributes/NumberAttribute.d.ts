export declare enum NumberAttributeType {
    FIXED_VALUE = 0,
    PERCENTAGE_ADD = 1,
    PERCENTAGE_MULT = 2
}
export interface NumberAttribute {
    value: number;
    type: NumberAttributeType;
    key: string;
}
