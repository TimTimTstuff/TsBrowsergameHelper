"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const attributes_1 = require("../src/game/attributes");
describe('Attribute Serialization', () => {
    it('build', () => {
        let nm = new attributes_1.NamedNumberAttributes();
        nm.addAttribute('str', { key: 'base', type: attributes_1.NumberAttributeType.FIXED_VALUE, value: 100 });
        nm.addAttribute('hp', { key: 'base', type: attributes_1.NumberAttributeType.FIXED_VALUE, value: 250 });
        nm.addAttribute('hp', { key: 'buff1', type: attributes_1.NumberAttributeType.PERCENTAGE_ADD, value: 1 });
        nm.addAttribute('hp', { key: 'buff2', type: attributes_1.NumberAttributeType.PERCENTAGE_ADD, value: 0.1 });
        nm.addAttribute('hp', { key: 'buff3', type: attributes_1.NumberAttributeType.PERCENTAGE_ADD, value: 0.15 });
        nm.addAttribute('hp', { key: 'buff4', type: attributes_1.NumberAttributeType.PERCENTAGE_ADD, value: 0.0123 });
        nm.addAttribute('str', { key: 'buff1', type: attributes_1.NumberAttributeType.PERCENTAGE_MULT, value: 0.1 });
        nm.addAttribute('str', { key: 'buff2', type: attributes_1.NumberAttributeType.PERCENTAGE_MULT, value: 0.1 });
        nm.addAttribute('str', { key: 'buff3', type: attributes_1.NumberAttributeType.PERCENTAGE_MULT, value: 0.1 });
        nm.addAttribute('str', { key: 'buff4', type: attributes_1.NumberAttributeType.PERCENTAGE_MULT, value: 0.1 });
        nm.addAttribute('str', { key: 'buff5', type: attributes_1.NumberAttributeType.PERCENTAGE_MULT, value: 0.1 });
        var x = nm.getSaveObject();
        let nm2 = new attributes_1.NamedNumberAttributes(JSON.parse(JSON.stringify(x)));
        chai_1.expect(nm.getAttributeValue('hp'), nm.getAttributeValue('hp').toString()).eq(nm2.getAttributeValue('hp'));
        chai_1.expect(nm.getAttributeValue('str'), nm.getAttributeValue('str').toString()).eq(nm2.getAttributeValue('str'));
    });
});
describe('Named NumberAttributes', () => {
    it('Named Attributes', () => {
        let nm = new attributes_1.NamedNumberAttributes();
        nm.addAttribute('str', { key: 'base', type: attributes_1.NumberAttributeType.FIXED_VALUE, value: 100 });
        nm.addAttribute('hp', { key: 'base', type: attributes_1.NumberAttributeType.FIXED_VALUE, value: 250 });
        nm.addAttribute('hp', { key: 'buff1', type: attributes_1.NumberAttributeType.PERCENTAGE_ADD, value: 1 });
        chai_1.expect(nm.getAttributeValue('str')).eq(100);
        chai_1.expect(nm.getAttributeValue('hp')).eq(500);
    });
});
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
