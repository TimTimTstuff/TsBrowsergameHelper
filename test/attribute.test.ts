import { expect } from 'chai'
import { NumberAttributeBag, NumberAttributeType, NamedNumberAttributes } from '../src/game/attributes'


describe('Attribute Serialization', () => {
  
    it('build',() => {
    let nm = new NamedNumberAttributes()
    nm.addAttribute('str',{key:'base', type:NumberAttributeType.FIXED_VALUE, value: 100})
    nm.addAttribute('hp', {key:'base', type:NumberAttributeType.FIXED_VALUE, value:250})

    nm.addAttribute('hp',{key:'buff1', type:NumberAttributeType.PERCENTAGE_ADD, value:1})
    nm.addAttribute('hp',{key:'buff2', type:NumberAttributeType.PERCENTAGE_ADD, value:0.1})
    nm.addAttribute('hp',{key:'buff3', type:NumberAttributeType.PERCENTAGE_ADD, value:0.15})
    nm.addAttribute('hp',{key:'buff4', type:NumberAttributeType.PERCENTAGE_ADD, value:0.0123})

    nm.addAttribute('str',{key:'buff1', type:NumberAttributeType.PERCENTAGE_MULT, value:0.1})
    nm.addAttribute('str',{key:'buff2', type:NumberAttributeType.PERCENTAGE_MULT, value:0.1})
    nm.addAttribute('str',{key:'buff3', type:NumberAttributeType.PERCENTAGE_MULT, value:0.1})
    nm.addAttribute('str',{key:'buff4', type:NumberAttributeType.PERCENTAGE_MULT, value:0.1})
    nm.addAttribute('str',{key:'buff5', type:NumberAttributeType.PERCENTAGE_MULT, value:0.1})
    
    

    var x = nm.getSaveObject()

    let nm2 = new NamedNumberAttributes(JSON.parse(JSON.stringify(x)))
    expect(nm.getAttributeValue('hp'),nm.getAttributeValue('hp').toString()).eq(nm2.getAttributeValue('hp'))
    expect(nm.getAttributeValue('str'),nm.getAttributeValue('str').toString()).eq(nm2.getAttributeValue('str'))
})
})

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