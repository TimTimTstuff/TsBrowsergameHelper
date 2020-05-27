import { expect } from 'chai'
import { NumberAttributeBag, NumberAttributeType, NamedNumberAttributes } from '../src/game/attributes'


describe('Named NumberAttributes', () => {

    it('Named Attributes',()=>{
        let nm = new NamedNumberAttributes()
        nm.addAttribute('str',{key:'base', type:NumberAttributeType.FIXED_VALUE, value: 100})
        nm.addAttribute('hp', {key:'base', type:NumberAttributeType.FIXED_VALUE, value:250})

        nm.addAttribute('hp',{key:'buff1', type:NumberAttributeType.PERCENTAGE_ADD, value:1})

        expect(nm.getAttributeValue('str')).eq(100)
        expect(nm.getAttributeValue('hp')).eq(500)

    })

})

describe('Numberattribute Tests', () => {

    var numlist: NumberAttributeBag
    function resetData(){
        numlist = new NumberAttributeBag()
        numlist.addModifier({ type: NumberAttributeType.FIXED_VALUE, value: 100, key: 'f1' })
    }
   
    beforeEach(() => {
        resetData()
    })

    it('List should contain one element with value 100', () => {
        resetData()
        expect(numlist.getAttributeList().length).to.eq(1)
        expect(numlist.getValue()).to.eq(100)
    })

    it('Add 10% to 100', () => {
        numlist.addModifier({ key: 'p1', value: 0.1, type: NumberAttributeType.PERCENTAGE_ADD })
        expect(numlist.getValue()).to.eq(110)
    })


    it('Add another 20%', () => {
        numlist.addModifier({ key: 'p1', value: 0.1, type: NumberAttributeType.PERCENTAGE_ADD })
        numlist.addModifier({ key: 'p2', value: 0.2, type: NumberAttributeType.PERCENTAGE_ADD })
        expect(numlist.getValue(), `Elements: ${numlist.getAttributeList().length}`).to.eq(130)
    })

    it('Remove 10% modifier', () => {
        numlist.addModifier({ key: 'p1', value: 0.1, type: NumberAttributeType.PERCENTAGE_ADD })
        numlist.addModifier({ key: 'p2', value: 0.2, type: NumberAttributeType.PERCENTAGE_ADD })
        numlist.removeModifier({ key: 'p1', value: 0.1, type: NumberAttributeType.PERCENTAGE_ADD })
        expect(numlist.getValue()).to.eq(120)
    })


})