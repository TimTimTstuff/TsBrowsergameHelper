import { expect } from 'chai'
import * as TGame from '../index'

describe('Inventory Tests', () => {

    function getInventory():TGame.Inventory {
        let inv = new TGame.Inventory()
        return inv
    }

    it('Add item validate its existence', ()=>{
        let inv = getInventory()
        inv.createItem({name:'i1', maxamount: 10, amount:0, data:null})
        expect(1).to.eq(inv.getDifferentItemsCount())
    })

    it('Add amount to item which not exist', () => {
        let inv = getInventory()
        let message = 1
        try{
            inv.addItem('not_existing',0)
        }catch(ex){
            message = ex.error
        }
        
        expect(TGame.GameError_Inventory.ItemDoesNotExist).to.eq(message)
    })

    it('Add item amount and get amount',() => {
        let inv = getInventory()
        inv.createItem({name:'i1', amount: 0, maxamount:10, data:null})
        expect(0).eq(inv.getItemAmount('i1'))
        inv.addItem('i1',1)
        expect(1).eq(inv.getItemAmount('i1'))
    })

    it('Add item amount bigger then max item', () => {
        let inv = getInventory()
        inv.createItem({name:'i1', amount: 0, maxamount:10, data:null})
        expect(false).eq(inv.addItem('i1', 11))
    })

    it('Remove item amount', () => {
        let inv = getInventory()
        inv.createItem({name:'i1', amount: 0, maxamount:10, data:null})
        inv.addItem('i1',10)
        expect(10).eq(inv.getItemAmount('i1'))
        inv.removeItem('i1',5)
        expect(5).eq(inv.getItemAmount('i1'))
    })

    it('Remove to many items',()=>{
        let inv = getInventory()
        inv.createItem({name:'i1', amount: 0, maxamount:10, data:null})
        inv.addItem('i1',1)
        expect(1).eq(inv.getItemAmount('i1'))
        expect(false).eq(inv.removeItem('i1',5))
    })

})

describe('Inventory Save Test', () => {

    it('Save inventory and load', () => {
        
        let inv = new TGame.Inventory()
        inv.createItem({name:'i1', maxamount:10, amount:5, data:null})
        inv.createItem({name:'i2', maxamount:20, amount:10, data:null})
        inv.createItem({name:'i3', maxamount:30, amount:15, data:null})
       
        let inv2 = new TGame.Inventory(JSON.parse(JSON.stringify(inv.getInventoryObject())))
        expect(['i1','i2','i3']).eql(inv2.getAllItemNames())
        inv.addItem('i1',5)
        expect(10).eq(inv.getItemAmount('i1'))
        expect(5).eq(inv2.getItemAmount('i1'))
    })

})