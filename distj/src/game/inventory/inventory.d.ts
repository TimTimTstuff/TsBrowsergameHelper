export declare class Inventory {
    private _items;
    /**
     *
     */
    constructor(items?: {
        [index: string]: Item;
    });
    /**
     * Creates a slot for an item in the Inventory. Items have to be create before they can be used by the Inventory
     * @param item to add
     * @param override if true, overrides the existing item, false throws an error if the item exists
     */
    createItem(item: Item, override?: boolean): void;
    /**
     * Adds the specific item amount to the inventory when there is enoucht space
     * @param item existing item
     * @param amount positive number
     */
    addItem(item: string, amount?: number): boolean;
    /**
     * Removes the amount of items from the inventory if it has enought
     * @param item name of the item
     * @param amount positiv number
     */
    removeItem(item: string, amount?: number): boolean;
    /**
     * Sets the max amount for an Item
     * @param item item to change
     * @param maxamount positive amount (0 for infinite) negative numbers treatend as 0
     */
    setItemMaxAmount(item: string, maxamount: number): void;
    /**
     * Returns the current amount of the Item in the inventory
     * @param item name of the item
     */
    getItemAmount(item: string): number;
    /**
     * Returns the number of uniquie items in the inventory
     */
    getDifferentItemsCount(): number;
    /**
     * Returns a list of all item names
     */
    getAllItemNames(): string[];
    /**
     * Checks if the item exists
     * @param item
     */
    hasItem(item: string): boolean;
    private validateItemExist;
    /**
     * Checks if the max amount for the item is reached
     * if maxamount is 0 = infinite space
     * if item does not exis = space is free
     * @param item item name to check
     * @param amount amount to validate
     * @returns has space or not
     */
    hasSpace(item: string, amount: number): boolean;
    getInventoryObject(): {
        [index: string]: Item;
    };
}
export interface Item {
    name: string;
    amount: number;
    maxamount: number;
    data: any;
}
