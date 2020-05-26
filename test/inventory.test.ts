import { expect } from 'chai'
import { NumberAttributeBag, NumberAttributeType } from '../src/game/attributes'
import { Inventory } from '../src/game/inventory'
import { GameError_Inventory, GameErrorMessage, GameError } from '../src/game/gameerrors'

describe('Inventory Tests', () => {

    function getInventory():Inventory {
        let inv = new Inventory()
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
        
        expect(GameError_Inventory.ItemDoesNotExist).to.eq(message)
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