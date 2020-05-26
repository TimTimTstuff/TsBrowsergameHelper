"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameerrors_1 = require("../gameerrors");
class Inventory {
    /**
     *
     */
    constructor(items) {
        this._items = {};
        if (items != undefined)
            this._items = items;
    }
    /**
     * Creates a slot for an item in the Inventory. Items have to be create before they can be used by the Inventory
     * @param item to add
     * @param override if true, overrides the existing item, false throws an error if the item exists
     */
    createItem(item, override = false) {
        if (!override && this.hasItem(item.name))
            throw gameerrors_1.GameError.error(`Item: ${item} exists!`, gameerrors_1.GameError_Inventory.CantCreateItemExists);
        this._items[item.name] = item;
    }
    /**
     * Adds the specific item amount to the inventory when there is enoucht space
     * @param item existing item
     * @param amount positive number
     */
    addItem(item, amount = 1) {
        this.validateItemExist(item);
        if (amount < 1 || !this.hasSpace(item, amount))
            return false;
        this._items[item].amount += amount;
        return true;
    }
    /**
     * Removes the amount of items from the inventory if it has enought
     * @param item name of the item
     * @param amount positiv number
     */
    removeItem(item, amount = 1) {
        this.validateItemExist(item);
        if (amount < 1 || this.getItemAmount(item) < amount)
            return false;
        this._items[item].amount -= amount;
        return true;
    }
    /**
     * Sets the max amount for an Item
     * @param item item to change
     * @param maxamount positive amount (0 for infinite) negative numbers treatend as 0
     */
    setItemMaxAmount(item, maxamount) {
        this.validateItemExist(item);
        if (maxamount < 0)
            maxamount = 0;
        this._items[item].maxamount = maxamount;
    }
    /**
     * Returns the current amount of the Item in the inventory
     * @param item name of the item
     */
    getItemAmount(item) {
        if (!this.hasItem(item))
            return 0;
        return this._items[item].amount;
    }
    /**
     * Returns the number of uniquie items in the inventory
     */
    getDifferentItemsCount() {
        return Object.keys(this._items).length;
    }
    /**
     * Returns a list of all item names
     */
    getAllItemNames() {
        return Object.keys(this._items);
    }
    /**
     * Checks if the item exists
     * @param item
     */
    hasItem(item) {
        return this._items[item] !== undefined;
    }
    validateItemExist(item) {
        if (!this.hasItem(item))
            throw gameerrors_1.GameError.error(`Item: ${item} does not exist! Create first`, gameerrors_1.GameError_Inventory.ItemDoesNotExist);
    }
    /**
     * Checks if the max amount for the item is reached
     * if maxamount is 0 = infinite space
     * if item does not exis = space is free
     * @param item item name to check
     * @param amount amount to validate
     * @returns has space or not
     */
    hasSpace(item, amount) {
        if (!this.hasItem(item))
            return true;
        return this._items[item].maxamount == 0 || this._items[item].amount + amount <= this._items[item].maxamount;
    }
    getInventoryObject() {
        return this._items;
    }
}
exports.Inventory = Inventory;
