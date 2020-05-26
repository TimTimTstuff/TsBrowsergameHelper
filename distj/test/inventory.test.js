"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const inventory_1 = require("../src/game/inventory");
const gameerrors_1 = require("../src/game/gameerrors");
describe('Inventory Tests', () => {
    function getInventory() {
        let inv = new inventory_1.Inventory();
        return inv;
    }
    it('Add item validate its existence', () => {
        let inv = getInventory();
        inv.createItem({ name: 'i1', maxamount: 10, amount: 0, data: null });
        chai_1.expect(1).to.eq(inv.getDifferentItemsCount());
    });
    it('Add amount to item which not exist', () => {
        let inv = getInventory();
        let message = 1;
        try {
            inv.addItem('not_existing', 0);
        }
        catch (ex) {
            message = ex.error;
        }
        chai_1.expect(gameerrors_1.GameError_Inventory.ItemDoesNotExist).to.eq(message);
    });
    it('Add item amount and get amount', () => {
        let inv = getInventory();
        inv.createItem({ name: 'i1', amount: 0, maxamount: 10, data: null });
        chai_1.expect(0).eq(inv.getItemAmount('i1'));
        inv.addItem('i1', 1);
        chai_1.expect(1).eq(inv.getItemAmount('i1'));
    });
    it('Add item amount bigger then max item', () => {
        let inv = getInventory();
        inv.createItem({ name: 'i1', amount: 0, maxamount: 10, data: null });
        chai_1.expect(false).eq(inv.addItem('i1', 11));
    });
    it('Remove item amount', () => {
        let inv = getInventory();
        inv.createItem({ name: 'i1', amount: 0, maxamount: 10, data: null });
        inv.addItem('i1', 10);
        chai_1.expect(10).eq(inv.getItemAmount('i1'));
        inv.removeItem('i1', 5);
        chai_1.expect(5).eq(inv.getItemAmount('i1'));
    });
    it('Remove to many items', () => {
        let inv = getInventory();
        inv.createItem({ name: 'i1', amount: 0, maxamount: 10, data: null });
        inv.addItem('i1', 1);
        chai_1.expect(1).eq(inv.getItemAmount('i1'));
        chai_1.expect(false).eq(inv.removeItem('i1', 5));
    });
});
describe('Inventory Save Test', () => {
    it('Save inventory and load', () => {
        let inv = new inventory_1.Inventory();
        inv.createItem({ name: 'i1', maxamount: 10, amount: 5, data: null });
        inv.createItem({ name: 'i2', maxamount: 20, amount: 10, data: null });
        inv.createItem({ name: 'i3', maxamount: 30, amount: 15, data: null });
        let inv2 = new inventory_1.Inventory(JSON.parse(JSON.stringify(inv.getInventoryObject())));
        chai_1.expect(['i1', 'i2', 'i3']).eql(inv2.getAllItemNames());
        inv.addItem('i1', 5);
        chai_1.expect(10).eq(inv.getItemAmount('i1'));
        chai_1.expect(5).eq(inv2.getItemAmount('i1'));
    });
});
