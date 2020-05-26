"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const attributes_1 = require("../src/game/attributes");
describe('Numberattribute Tests', () => {
    var numlist;
    function resetData() {
        numlist = new attributes_1.NumberAttributeBag();
        numlist.addModifier({ type: attributes_1.NumberAttributeType.FIXED_VALUE, value: 100, key: 'f1' });
    }
    beforeEach(() => {
        resetData();
    });
    it('List should contain one element with value 100', () => {
        resetData();
        chai_1.expect(numlist.getAttributeList().length).to.eq(1);
        chai_1.expect(numlist.getValue()).to.eq(100);
    });
    it('Add 10% to 100', () => {
        numlist.addModifier({ key: 'p1', value: 0.1, type: attributes_1.NumberAttributeType.PERCENTAGE_ADD });
        chai_1.expect(numlist.getValue()).to.eq(110);
    });
    it('Add another 20%', () => {
        numlist.addModifier({ key: 'p1', value: 0.1, type: attributes_1.NumberAttributeType.PERCENTAGE_ADD });
        numlist.addModifier({ key: 'p2', value: 0.2, type: attributes_1.NumberAttributeType.PERCENTAGE_ADD });
        chai_1.expect(numlist.getValue(), `Elements: ${numlist.getAttributeList().length}`).to.eq(130);
    });
    it('Remove 10% modifier', () => {
        numlist.addModifier({ key: 'p1', value: 0.1, type: attributes_1.NumberAttributeType.PERCENTAGE_ADD });
        numlist.addModifier({ key: 'p2', value: 0.2, type: attributes_1.NumberAttributeType.PERCENTAGE_ADD });
        numlist.removeModifier({ key: 'p1', value: 0.1, type: attributes_1.NumberAttributeType.PERCENTAGE_ADD });
        chai_1.expect(numlist.getValue()).to.eq(120);
    });
});
