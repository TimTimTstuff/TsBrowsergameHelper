import { GameError_Inventory, GameError } from "../gameerrors"

export class Inventory{

    private _items: {[index:string]:Item} = {}

    /**
     *
     */
    constructor(items?:{[index:string]:Item}) {
        if(items != undefined)
            this._items = items
        
    }
    
    /**
     * Creates a slot for an item in the Inventory. Items have to be create before they can be used by the Inventory
     * @param item to add
     * @param override if true, overrides the existing item, false throws an error if the item exists
     */
    public createItem(item:Item, override:boolean = false){
        if(!override && this.hasItem(item.name)) throw GameError.error(`Item: ${item} exists!`, GameError_Inventory.CantCreateItemExists)
        this._items[item.name] = item
    }

    /**
     * Adds the specific item amount to the inventory when there is enoucht space
     * @param item existing item
     * @param amount positive number
     */
    public addItem(item:string, amount:number = 1): boolean {
        this.validateItemExist(item)
        if(amount < 1 || !this.hasSpace(item,amount)) return false
        this._items[item].amount += amount
        return true
    }

    /**
     * Removes the amount of items from the inventory if it has enought
     * @param item name of the item
     * @param amount positiv number
     */
    public removeItem(item:string, amount:number = 1): boolean {
        this.validateItemExist(item)
        if(amount < 1 || this.getItemAmount(item) < amount) return false
        this._items[item].amount -= amount
        return true

    } 

    /**
     * Sets the max amount for an Item
     * @param item item to change
     * @param maxamount positive amount (0 for infinite) negative numbers treatend as 0
     */
    public setItemMaxAmount(item:string, maxamount:number){
        this.validateItemExist(item)
        if(maxamount < 0) maxamount = 0
        this._items[item].maxamount = maxamount
    }

    /**
     * Returns the current amount of the Item in the inventory
     * @param item name of the item
     */
    public getItemAmount(item:string):number{
        if(!this.hasItem(item)) return 0
            return this._items[item].amount
    }

    /**
     * Returns the number of uniquie items in the inventory
     */
    public getDifferentItemsCount():number {
        return Object.keys(this._items).length
    }

    /**
     * Returns a list of all item names
     */
    public getAllItemNames():string[] {
        return Object.keys(this._items)
    }

    /**
     * Checks if the item exists
     * @param item 
     */
    public hasItem(item:string): boolean{
        return this._items[item] !== undefined
    }

    private validateItemExist(item:string) : void{
        if(!this.hasItem(item)) throw GameError.error(`Item: ${item} does not exist! Create first`, GameError_Inventory.ItemDoesNotExist)
    }

    /**
     * Checks if the max amount for the item is reached
     * if maxamount is 0 = infinite space
     * if item does not exis = space is free
     * @param item item name to check
     * @param amount amount to validate
     * @returns has space or not
     */
    public hasSpace(item:string, amount:number) : boolean {
        if(!this.hasItem(item)) return true
        return this._items[item].maxamount == 0 || this._items[item].amount + amount <= this._items[item].maxamount
    }

    public getInventoryObject():{[index:string]:Item} {
        return this._items
    }
}

export interface Item {
    name: string
    amount: number
    maxamount:number
    data:any
}

